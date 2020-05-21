import { getSession } from '../../lib/iron'

export default async function user(req, res) {
  // Check user is logged in and has admin access

  const qstring = (req.query.newsid) ? {newsid: req.query.newsid} : (req.query.category && parseInt(req.query.category) > 0) ? {action:'approved', category: req.query.category} : {action:'approved', category:{$nin:['9', '10', '11']}}
  const page = (req.query.page && parseInt(req.query.page) > 0) ? parseInt(req.query.page) : 1
  const sort = (req.query.sort) ? { [req.query.sort]: 1 } : {date: -1}
  let project = {added: 1, approved_title: 1, approved_description: 1, date: 1, approved_image: 1, image: 1, link: 1,  newsid: 1, category: 1 };
  if(req.query.newsid){
      project.longapproved_description = 1;
  }
  let size = 9
  if (req.query.size
      && parseInt(req.query.size) > 0
      && parseInt(req.query.size) < 500) {
      size = parseInt(req.query.size)
  }

  const skip = (size*(page-1) > 0) ? size*(page-1) : 0

  let response = {
      feed: [],
      page: page,
      size: size,
      sort: req.params.sort,
      total: 0
  }

  if (req.params.sort) response.sort = req.params.sort

  let result
  return new Promise(function(resolve, reject) {
      result = usersCollection
          .find(qstring)
          .project(project)
          .skip(skip)
          .sort(sort)
          .limit(size)

      result.toArray((err, feeds) => {
          if (err) {
              reject(err)
          } else {
              resolve(feeds)
          }
      })
  })
      .then(feeds => {
          for(var i = 0; i<feeds.length; i++){
              if(!feeds[i].approved_image){
                  feeds[i].approved_image = cat_img(feeds[i].category);
              }
          }
          response.feeds = feeds
          return result.count()
      })
      .then(count => {
          response.total = count
          return res.json(response);
      })
      .catch(err => {
          return res.status(500).json(err)
      })

})
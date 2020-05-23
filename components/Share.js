import React from 'react';
import Link from 'next/link';
import {Container, Row, Col} from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Package from '../package'


function Share(props) {
    return(
        <div className="pt-1">
                <a href={`http://www.facebook.com/share.php?u=${Package.homepage}${props.url}`} target="_blank" className="mr-2">
                <img style={{color:'#3b5998', width:props.width}} src={`/facebook.svg`}/>
                </a>
                <a target="_blank" href={`https://twitter.com/intent/tweet?text=${props.text}+. Read more at: ${Package.homepage}${props.url}`} className="mr-2">
                <img style={{color:'#3b5998', width:props.width}} src={`/twitter.svg`}/>
                </a>
                <a target="_blank" href={`https://www.linkedin.com/shareArticle?mini=true&url=${Package.homepage}${props.url}&summary=My%20favorite%20developer%20program&source=LinkedIn`} className="mr-2">
                <img style={{color:'#3b5998', width:props.width}} src={`/linkedin.svg`}/>
                </a>
                <a target="_blank" href={`whatsapp://send?text=${Package.homepage}${props.url}`} className="mr-2">
                <img style={{color:'#3b5998', width:props.width}} src={`/whatsapp.svg`}/>
                </a>
            </div>
    )
}

export default Share;

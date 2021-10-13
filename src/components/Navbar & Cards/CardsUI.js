
import React from 'react';



const Card = props => {
    return (
        <div className="card text-center">
            <div className="overflow embed-responsive embed-responsive-16by9">
                <img src={props.imgsrc} alt="" className='card-img-top embed-responsive-item' />
            </div>
            <div className="card-body flex-fill text-dark">
                <h4 className="card-title">{props.cardtitle}</h4><br />
                <p className="card-text text-secondary">{props.cardtxt}</p>
            </div>
            <div class="card-footer">
                <a href={props.btnsrc} target="_blank" rel="noreferrer noopener">
                    <button class="btn btn-primary align-self-end">Find out more</button>
                </a>
            </div>
        </div>
    )
}

export default Card;
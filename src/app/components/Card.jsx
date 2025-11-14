import React from "react";
import CardStyle from "@/styles/card";
import MyImage from "@/components/MyImage";

const Card = ({ title, description, image, tags }) => {
    return (
        <CardStyle className="card">
            {image && <MyImage src={image} alt={title} className="card-image" />}
            <div className="details">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                {tags && (
                    <ul className="card-tags">
                        {tags.map((tag, index) => (
                            <li key={index} className="card-tag">
                                {tag}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </CardStyle>
    );
};

export default Card;

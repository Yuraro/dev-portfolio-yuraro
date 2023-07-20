import React from 'react';
import css from './Subtitles.module.css';

const Subtitles = () => {
    return (
        <div className={css.subtitles_container}>
            <div className={css.subtitle_block}>
                <h2 className={css.subtitle_title}>Enhancing Product Expertise:</h2>
                <p className={css.subtitles_description}>- Guiding individuals to master the product intricacies for profound understanding.</p>
            </div>
            <div className={css.subtitle_block}>
                <h2 className={css.subtitle_title}>Fostering Dynamic Team Building:</h2>
                <p className={css.subtitles_description}>- Facilitating the creation of strong and cohesive teams for collective success.</p>
            </div>
            <div className={css.subtitle_block}>
                <h2 className={css.subtitle_title}>Streamlined Project Development:</h2>
                <p className={css.subtitles_description}>- Implementing structured approaches to optimize project development efficiency.</p>
            </div>
        </div>
    );
};

export default Subtitles;




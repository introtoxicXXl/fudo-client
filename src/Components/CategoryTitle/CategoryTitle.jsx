import { Parallax } from 'react-parallax';
import { PropTypes } from 'prop-types';

const CategoryTitle = ({ img, title }) => {

    return (
        <div>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the menu"
                strength={-300}
            >
                <div className="hero h-[500px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md text-center uppercase">
                            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

CategoryTitle.propTypes = {
    img: PropTypes.img,
    title: PropTypes.string
}
export default CategoryTitle;
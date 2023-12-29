import PropTypes from 'prop-types';

const SectionTitle = ({ heading, subHeading }) => {

    return (
        <div className='md:w-4/12 mx-auto text-center my-7'>
            <p className='text-[#D99904] italic text-xl py-3'>--- {subHeading} ---</p>
            <h1 className=' text-4xl border-y-2 py-3'>{heading}</h1>
        </div>
    );
};
SectionTitle.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
}
export default SectionTitle;
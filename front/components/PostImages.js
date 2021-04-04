import PropTypes from "prop-types";

const PostImages = ({ image }) => {
  return (
    <>
      <div>hello</div>
    </>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;

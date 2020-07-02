import React, { PureComponent, createRef } from 'react';
import withStyles from 'react-jss';
import styles from './image-upload-styles';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

class ImageUpload extends PureComponent {
  state = {
    previewUrl: null,
    file: null,
    isValid: true
  }

  filePickerRef = createRef();

  onFileChange = (e) => {
    if (e.target.files && e.target.files.length === 1) {
      this.setState({
        file: e.target.files[0],
        isValid: true
      });
    } else {
      this.setState({
        isValid: false
      });
    }
  }

  pickImageHandler = () => {
    this.filePickerRef.current.click();
  }

  componentDidUpdate = () => {
    if (this.state.file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.setState({
          previewUrl: fileReader.result
        });
      };
      fileReader.readAsDataURL(this.state.file);
    }
  }

  saveProfileImage = () => {
    if (this.state.file) {
      const formData = new FormData();
      formData.append('profile-image', this.state.file);
      this.props.onImageUpload(formData);
      this.setState({
        file: null
      });
    } else {
      this.setState({
        isValid: false
      });
    }
  }

  render = () => {
    const { previewUrl, isValid } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <input
          ref={this.filePickerRef}
          type="file"
          style={{ display: 'none' }}
          accept=".jpg, .png, .jpeg"
          onChange={this.onFileChange}
        />
        <div className={classes.imageUpload}>
          <div className={classes.imageUploadPreview}>
            {previewUrl && <img src={previewUrl} alt="Preview" title="Profile preview"/>}
            {!previewUrl && <p>Please pick an image</p>}
          </div>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddAPhotoIcon />}
            onClick={this.pickImageHandler}
          >
            Pick an image
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            onClick={this.saveProfileImage}
          >
            Save
          </Button>
          {!isValid && <p>Please, choose a file.</p>}
        </div>
      </div>
    );
  }
}

ImageUpload.propTypes = {
  classes: PropTypes.object.isRequired,
  hasError: PropTypes.object,
  onImageUpload: PropTypes.func.isRequired
};

export default withStyles(styles)(ImageUpload);

import React from 'react'
import styles from './Header.module.css'
import googleDocsLogo from '../../../../src/images/Google_Docs_Logo_512px.png'; 
import {MdOutlineStarBorderPurple500,MdDriveFolderUpload, MdCloudDone} from 'react-icons/md'
const Header = () => {
  return (
    <div className={styles["header-wrapper"]}>
        <div className={styles["google-logo"]}>
          <img src={googleDocsLogo} alt="document" width={25} height={35}/>
         
        </div>
        <div className={styles["title-feature"]}> 
            <div className={styles["title"]}>
                <span>My document</span>
                <span><MdOutlineStarBorderPurple500 /></span>
                <span><MdDriveFolderUpload /></span>
                <span><MdCloudDone /></span>
            </div>
            <div className={styles["feature"]}>

            <span>File</span>
                <span>Edit</span>
                <span>View</span>
                <span>Insert</span>
                <span>Tools</span>
                <span>Extension</span>
                <span>Help</span>

            </div>
        </div>
    </div>
  )
}

export default Header
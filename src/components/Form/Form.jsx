import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { BiMailSend } from 'react-icons/bi';
import styles from './Form.module.css';
import { useAddCommentMutation } from '../../redux/commentApi';

export const Form = () => {
  const [addComment, { isLoading }] = useAddCommentMutation();

  const [formData, setFormData] = useState({ author: '', content: '' });
  // const [author, setAuthor] = useState('');
  // const [content, setContent] = useState('');

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    // console.log(name, value);
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addComment(formData);
      toast.success('Success');
    } catch (error) {
      toast.error('Error');
    }

    setFormData({ author: '', content: '' });
    // setAuthor('');
    // setContent('');
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <label className={styles.label}>
          <span className={styles.labelName}>Full name</span>
          <input
            type="text"
            name="author"
            className={styles.input}
            value={formData.author}
            onChange={onHandleChange}
          />
        </label>

        <label className={styles.label}>
          <span className={styles.labelName}>Your comment</span>
          <textarea
            className={styles.input}
            name="content"
            rows="5"
            value={formData.content}
            onChange={onHandleChange}
          ></textarea>
        </label>

        <button className={styles.formBtn} disabled={isLoading}>
          <BiMailSend className={styles.icon} />
          {isLoading ? 'Loading' : 'Sent'}
        </button>
      </form>
    </div>
  );
};

import React from 'react';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from '../styles/MovieForm.module.css';


const MovieForm = ({ movieInfo }) => {
    console.log(movieInfo);
    const genresList = ['Documentary', 'Comedy', 'Horror', 'Crime'];
    const router = useRouter();

    const navigateHome = () => {
      router.push('/');
    };

    const defaultInitialValues = {
        title: '',
        poster_path: '',
        release_date: '',
        vote_average: 0,
        runtime: 0,
        overview: ''
      };
      
      const initialValues = movieInfo || defaultInitialValues;

      const validate = values => {
        const errors = {};
        
        if (!values.title) {
          errors.title = 'Required';
        }
        if (!values.poster_path) {
          errors.poster_path = 'Required';
        }
        if (!values.release_date) {
          errors.release_date = 'Required';
        } 
        if (!values.overview) {
          errors.overview = 'Required';
        }
        if (values.rating < 0.1) {
            errors.rating = 'Should be a positive number';
        }
            
        if (values.runtime < 1) {
            errors.runtime = 'Should be a positive number';
        }
        return errors;
      };
      
      const onSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true);

        const method = location.pathname === '/movies/new' ? 'POST' : 'PUT';
        
        try {
          const response = await fetch(`http://localhost:4000/movies`, {
            method: method,
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          });
          if (response.ok) {
            alert('Form submitted successfully!');
            navigateHome();
          } else {
            alert('Failed to submit form.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Error.');
        } finally {
          setSubmitting(false);
        }
      };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
             <Link href={`/`}>
          <button>Close</button>
          </Link>
            <div>
              <label className={styles.redLabel}>Title</label>
              <input className={styles.inputField}
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
              />
              {errors.title && touched.title && <div className='validation'>{errors.title}</div>}
            </div>
            <div>
              <label className={styles.redLabel}>URL</label>
              <input className={styles.inputField}
                type="text"
                name="poster_path"
                value={values.poster_path}
                onChange={handleChange}
              />
              {errors.poster_path && touched.poster_path && <div className='validation'>{errors.poster_path}</div>}
            </div>
            <div>
              <label className={styles.redLabel}>GENRE</label>
              <select className='genreSelect' multiple={true} value={values.genres} onChange={handleChange} name="genres">
                {genresList.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
              {errors.genres && touched.genres && <div className='validation'>{errors.genres}</div>}
            </div>
            <div>
              <label className={styles.redLabel}>RELEASE DATE</label>
              <input className={styles.inputField}
                type="date"
                name="release_date"
                value={values.release_date}
                onChange={handleChange}
              />
              {errors.release_date && touched.release_date && <div className='validation'>{errors.release_date}</div>}
            </div>
            <div>
              <label className={styles.redLabel}>RATING</label>
              <input className={styles.inputField}
                type="number"
                name="vote_average"
                step='0.1'
                value={values.vote_average}
                onChange={handleChange}
              />
              {errors.vote_average && touched.postervote_average_path && <div className='validation'>{errors.vote_average}</div>}
            </div>
            <div>
              <label className={styles.redLabel}>RUNTIME</label>
              <input className={styles.inputField}
                type="number"
                name="runtime"
                value={values.runtime}
                onChange={handleChange}
              />
              {errors.runtime && touched.runtime && <div className='validation'>{errors.runtime}</div>}
            </div>
            <div>
              <label className={styles.redLabel}>OVERVIEW</label>
              <input className={styles.inputField}
                type="textarea"
                name="overview"
                value={values.overview}
                onChange={handleChange}
              />
              {errors.overview && touched.overview && <div className='validation'>{errors.overview}</div>}
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MovieForm;

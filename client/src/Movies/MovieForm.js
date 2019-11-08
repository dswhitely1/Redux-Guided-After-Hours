import React, {useState} from 'react';
import {connect} from 'react-redux';
import {postMovie} from '../actions/movieActions';

function MovieForm(props) {
    console.log(props);
    const [values, setValues] = useState({
        id: props.movies[props.movies.length -1].id + 1,
        title: '',
        metascore: 0,
        director: ''
    })

    const handleChange = e => setValues({...values, [e.target.name]: e.target.value});

    const handleSubmit = async e => {
        e.preventDefault();
        await props.postMovie(values);
        props.history.push('/');
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type='text' name='title' onChange={handleChange} value={values.title} />
            <label>Director</label>
            <input type='text' name='director' onChange={handleChange} value={values.director} />
            <label>Title</label>
            <input type='text' name='metascore' onChange={handleChange} value={values.metascore} />
            <button type='submit'>Submit</button>
        </form>
        </div>
    )
}

const mapStateToProps = state => ({movies: state.movies.movieData});

const mapDispatchToProps = {postMovie}

export default connect(mapStateToProps, mapDispatchToProps)(MovieForm)
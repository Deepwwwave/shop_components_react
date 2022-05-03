import React, {useEffect} from 'react';
import Gallery from '../../gallery/Gallery';
import { useDispatch } from 'react-redux';
import {loadAllArticles} from "../../../redux/articles/action"


export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadAllArticles());
    });
  return (
    <main>
        <Gallery/>
    </main>
  )
}

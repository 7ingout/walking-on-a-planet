import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisuals } from '../../modules/visuals';
import VisualUI from '../ui/VisualUI';

const VisualContainer = () => {
    const { data, loading, error } = useSelector(state => state.visuals.visuals);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getVisuals());
    }, [dispatch])
    if(loading) return  <div className='spinner_bg'><div className="spinner"><div className="double-bounce1"></div><div className="double-bounce2"></div></div></div>
    // <div>로딩중입니다..</div> 
   
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return null
    return (
        <VisualUI visuals={data} />
    );
};

export default VisualContainer;
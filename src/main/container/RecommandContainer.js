import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecommands } from '../../modules/recommands';
import RecommandUI from '../ui/RecommandUI';

const RecommandContainer = () => {
    const { data, loading, error } = useSelector(state => state.recommands.recommands);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getRecommands());
    }, [dispatch])
    if(loading) return  <div className='spinner_bg'><div className="spinner"><div className="double-bounce1"></div><div className="double-bounce2"></div></div></div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>null</div>
    return (
        <div>
            <RecommandUI recommands={data} />
        </div>
    );
};

export default RecommandContainer;
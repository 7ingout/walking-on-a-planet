import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPics } from '../../modules/pics';
import PicUI from '../ui/PicUI';

const RecommandContainer = () => {
    const { data, loading, error } = useSelector(state => state.pics.pics);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPics());
    }, [dispatch])
    if(loading) return <div>로딩중입니다..</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>null</div>
    return (
        <div>
            <PicUI pics={data} />
        </div>
    );
};

export default RecommandContainer;
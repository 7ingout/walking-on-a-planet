import React from 'react';
import Header from './Header';
import './EditTrip.css'

const EditTrip = () => {
    return (
        <div className='EditTrip'>
        <Header />
        <div className='edit_bg'><img src='/addbg.jpg' alt='destination' /></div>
        <div className='edit_header'>
            <h1>국가 정보 수정하기</h1>
            <div>Modifying Country Information</div>
        </div>
        {/* <form onSubmit={onSubmit} className='addform'>
            <table className='add_table'>
                <tbody>
                    <tr>
                        <th>메인사진</th>
                        <td>
                        <div className='imgDiv'>
                                <div className='imgBox'>
                                    <div className='addimg'>
                                        <img src='/addimg.png' alt='addimg'/>
                                    </div>
                                </div>
                                <input type="file" className='imgInput' name="cityImg" onChange={onChangeImg}/>
                                    {
                                        formData.cityImg && <img src={`${API_URL}/upload/${formData.cityImg}`} alt="" className='imgview'/>
                                }
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <th>대륙</th>
                        <td>
                            <input name="cityContinent" type="text" 
                            value={formData.cityContinent}
                            onChange={onChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>국가</th>
                        <td>
                            <input name="cityNational" type="text"
                            value={formData.cityNationa}
                            onChange={onChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>국가설명</th>
                        <td>
                            <textarea name="cityDesc" type="text" 
                            value={formData.cityDesc}
                            onChange={onChange}></textarea>
                        </td>
                    </tr>
                    <tr>
                        <th>관광정보</th>
                        <td>
                            <textarea  name="cityDesc2" type="text" 
                            value={formData.cityDesc2}
                            onChange={onChange}></textarea>
                        </td>
                    </tr>
                    <tr>
                        <th>교통정보</th>
                        <td>
                            <textarea name="cityDesc3" type="text" 
                            value={formData.cityDesc3}
                            onChange={onChange}></textarea>
                        </td>
                    </tr> */}
                    {/* <tr>
                        <th>지도</th>
                        <td>
                            <input type="file" className='imgInput' name="cityMapImg" onChange={onChangeImg}/>
                                {
                                    formData.cityMapImg && <img src={`${API_URL}/upload/${formData.cityMapImg}`} alt="" className='imgview'/>
                                }
                        </td>
                    </tr> */}
                {/* </tbody>
            </table>
            <div className='btn_div'>
                    <button className='form_btn' type="submit">등록하기</button>
            </div>
        </form> */}
        </div>
    );
};

export default EditTrip;
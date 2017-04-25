import * as types from '../actions/actionTypes';

const initialState = {
 
	listData: [{
		text:'Ưu đãi độc quyền', 
		subtext:'2.9.0',
		img:'http://blog.bqool.com/wp-content/uploads/pinterest-banner.jpg',
		time:'1493019756',
		width: 200,
		content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys \n'
                  +'standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book\
                  It has survived not only five centuries, but also the leap into electronic typesetting\
                  remaining essentially unchanged. \
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
	}, 
	{
		text:'Ưu đãi nỗi bật',
		img:'http://bitas.com.vn/img/product/images/baochitruyenthong/banner%20web%20home%20page-01.jpg',
		time:'1493365356',
		width: 100,
		content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys \n'
                  +'standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book\
                  It has survived not only five centuries, but also the leap into electronic typesetting\
                  remaining essentially unchanged. \
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
	}, 
	{
		text:'Ưu đãi nỗi bật',
		img:'http://internettruyenhinhcap.com.vn/wp-content/uploads/2016/12/banner-internet-937x377px.png',
		time:'1493538156',
		width: 100,
		content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys \n'
                  +'standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book\
                  It has survived not only five centuries, but also the leap into electronic typesetting\
                  remaining essentially unchanged. \
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
	}, 
	{
		text:'Ưu đãi nỗi bật',
		img:'http://trungthaosamnhung.com/DATA/admin/khuyen-mai/khuyen-mai-tet-2016.jpg',
		time:'1493538156',
		content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys \n'
                  +'standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book\
                  It has survived not only five centuries, but also the leap into electronic typesetting\
                  remaining essentially unchanged. \
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
	}, 
	]    

};

export default function handle(state = initialState, action = {}) {
	switch (action.type) {
    
	case types.ADD:
		return{
			...state,
			listData:[{text:action.data},...state.listData]
		};
	case types.REMOVE:
		return{
			listData:state.listData.filter(x=>x.text !== action.data)
       
		};
	default:
		return state;
	}
}

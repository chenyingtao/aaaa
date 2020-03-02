import React from 'react';
import '../App.css';
import Me from '../components/me'
class Router3 extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<div style={{background:'#ccc'}}>
					<div style={{background:'#fff',textAlign:'center'}}>我的</div>
					<Me text="调用qq微信昵称" img="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u889.svg?token=0cfa39964a0724cdd484c2e80503e6ff3332f68d1f0f43b83188b883fb3ac8d9"/>
					<Me text="设置" imgwidth="20px" img="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=fc808d9037bed4af4eebc6f9eea3cc52ae63d199d932226e138ac0b44e8dab1b"/>
					<Me text="反馈" imgwidth="20px" img="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=fc808d9037bed4af4eebc6f9eea3cc52ae63d199d932226e138ac0b44e8dab1b"/>
					<Me text="帮助" imgwidth="20px" img="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=fc808d9037bed4af4eebc6f9eea3cc52ae63d199d932226e138ac0b44e8dab1b"/>
					<Me text="关于" imgwidth="20px" img="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=fc808d9037bed4af4eebc6f9eea3cc52ae63d199d932226e138ac0b44e8dab1b"/>
					<Me text="分享" imgwidth="20px" img="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=fc808d9037bed4af4eebc6f9eea3cc52ae63d199d932226e138ac0b44e8dab1b"/>
				</div>
		</div>
		)
	}
}
export default Router3
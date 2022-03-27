import React from 'react';

import html2canvas from 'html2canvas'

import './Certificate.scss'
import stamp from "../stamp.png";
import logo from "../Logo.png"
import fclogo from "../fclogo.png"

const ref = React.createRef();

// const downloadImg = async ()=>{
//     const element = ref.current;
//     const canvas = await html2canvas(element);
//     const data = canvas.toDataURL('image/png');
//     const link = document.createElement('a');

//     if (typeof link.download === 'string'){
//         link.href = data;
//         link.download = '팩트체크수료증.png'

//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     } else{
//         window.open(data);
//     }
// }

class Certificate extends React.Component{

    state={
        name: ""
    }

    download = () =>{
        if (this.state.name === ""){
            return;
        } else{
           this.downloadImg(); 
        }
    }

    downloadImg = async ()=>{
        const element = ref.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');
        const link = document.createElement('a');
    
        if (typeof link.download === 'string'){
            link.href = data;
            link.download = '팩트체크수료증.png'
    
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else{
            window.open(data);
        }
    }

    render(){
        let getDate =()=>{
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = yyyy+ '년 ' + mm + '월 ' + dd + '일';
            return today;
        }

       return(<div>
            <div ref={ref} id="certificate">
                <img src={logo} id="logo" alt="logo" />
                <div id="cert-wrapper">
                <div id="cert-title">
                    <div id="eng">CERTIFICATE OF COMPLETION</div>
                    <div id="kor">온라인 팩트체크 게임 완주 인증서</div>
                </div>

                <div id="cert-name">
                    <div className="content">{this.state.name}</div>
                    <div className="underline">NAME</div>
                </div>

                <div id="cert-date">
                    <div className="content">{getDate()}</div>
                    <div className="underline">DATE</div>
                </div>

                <div className="exp">아래 주제들에 대해 팩트체크 게임을 성공적으로 진행하였기에<br/>이 인증서를 드립니다.</div>
                <div id="cert-topics">
                    <div className="topic-wrapper">
                        <div className="topic-name">
                            1. 국가행사
                        </div>
                        <img src={stamp} alt="stamp"></img>
                    </div>
                    <div className="topic-wrapper">
                        <div className="topic-name">
                            2. 사회/교육
                        </div>
                        <img src={stamp} alt="stamp"></img>
                    </div>
                    <div className="topic-wrapper">
                        <div className="topic-name">
                            3. 사회/IT과학
                        </div>
                        <img src={stamp} alt="stamp"></img>
                    </div>
                    {/* <div className="topic-wrapper">
                        <div className="topic-name">
                            4. IT과학/<br/>정치인 발언
                        </div>
                        <img src={stamp} alt="stamp"></img>
                    </div> */}
                    <div className="topic-wrapper">
                        <div className="topic-name">
                            4. 과학/보건
                        </div>
                        <img src={stamp} alt="stamp"></img>
                    </div>
                </div>

                <div id="name">
                    <img alt="factcheckcenter logo" src={fclogo}></img></div>
                </div>
            </div>
            <div id="inputscreen">
                <div>수료증 발급을 위해 이름을 입력 후, '수료증 다운로드'를 눌러 주세요.</div>
                <input onChange={event => this.setState({name: event.target.value})} placeholder="이름을 입력하세요" id="nameinput"></input>
                <button onClick={this.download}>수료증 다운로드</button>
            </div>
       </div>)
   } 
}

export default Certificate
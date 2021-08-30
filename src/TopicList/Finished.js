import React from "react";
import "./Topic.scss";

class Finished extends React.Component {

	render() {
		return (
			<div id="topic">
				<div id="header-title">게임 플레이 완료</div>
				<div id="inner">
					<div>
					<p>Facts, Please 게임을 완수해주셔서 감사합니다! <br/>
						허위 정보에 대응하기 위한 여러분들의 정보 분별 능력이 한 단계 상승했을 것입니다!
						</p>
					<p>
						안내해드린대로 다음의 설문지를 클릭하여 설문에 응답해주세요.  <br/>
						<span class="emph">이 설문을 끝까지 수행해주셔야 청소년 팩트체크스쿨의 교육용 게임에 참여한 것으로 간주됩니다.</span> 또한, 여러분의 응답은 게임의 효과를 살피는데 소중한 피드백이 됩니다.
						</p>
					<p>
						<span class="emph">설문지 A를 안내받은 학생은 다음 링크를 눌러주세요.</span> <br/>
						<a href="https://forms.gle/Aq5Pp9sfR2B2Uy2t9">https://forms.gle/Aq5Pp9sfR2B2Uy2t9</a> <br/>
						반드시 안내받은 설문지를 눌러주세요.  <br/>
						(문자/메일에 설문지 A인지, B인지 확인!!, 잘못 응답시 게임 참여 결과에 오류가 발생합니다.)
					</p>
					<p>

						<span class="emph">설문지 B를 안내받은 학생은 다음 링크를 눌러주세요.</span> <br/>
						<a href="https://forms.gle/Lsn2QyjQiYjefrg6A">https://forms.gle/Lsn2QyjQiYjefrg6A</a> <br/>
						반드시 안내받은 설문지를 눌러주세요.  <br/>
						(문자/메일에 설문지 A인지, B인지 확인!!, 잘못 응답시 게임 참여 결과에 오류가 발생합니다.)
					</p>
					</div>
				</div>
				<footer>© SNU 팩트체크센터</footer>
			</div>
		);
	}
}

export default Finished;

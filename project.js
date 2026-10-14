const projects = {
  heyday: {
    title:'BY HEYDAY', code:'01', discipline:'FURNITURE PLATFORM · WEB DESIGN / PUBLISHING',
    headline:'취향을 발견하는 공간에서,\n콘텐츠를 탐색하는 경험으로.',
    summary:'가구·공간·서비스·커뮤니티를 하나의 브랜드 경험으로 연결하는 웹사이트 구성. 제공된 와이어프레임을 기준으로 정보 위계와 레이아웃 설계를 보여줍니다.',
    role:'UI/UX 디자인 · 웹 퍼블리싱', period:'2개월 (제공된 자료 기준)', share:'100% (제공된 자료 기준)', tools:'Figma · HTML · CSS · JavaScript', image:'assets/heyday-wireframe.png', state:'상세페이지 와이어프레임',
    focus:'정보 구조와 탐색 경험', focusDetail:'제품 중심 탐색과 브랜드 콘텐츠의 관계를 한눈에 이해할 수 있도록 구성합니다.',
    keywords:['MINIMAL','STRUCTURE','SPACIOUS'],
    challenges:[
      {question:'제품과 브랜드 콘텐츠를 어떻게 연결할까?',context:'제품 · 공간 · 서비스 · 커뮤니티처럼 성격이 다른 콘텐츠가 함께 소개됩니다.',decision:'콘텐츠를 네 개의 명확한 영역으로 나누어 첫 화면의 탐색 방향을 제시합니다.',evidence:'Main 섹션의 PRODUCT / SPACE / SERVICE / COMMUNITY 문구'},
      {question:'정보의 우선순위를 어떻게 보여줄까?',context:'여러 정보가 동일한 무게로 등장하면 사용자가 읽는 순서를 놓치기 쉽습니다.',decision:'큰 제목, 짧은 설명, 이미지 중심 구성으로 타이포그래피 위계를 정리합니다.',evidence:'Overview / Keyword / Main 섹션의 크기 대비'},
      {question:'서로 다른 콘텐츠에서도 일관성을 유지하려면?',context:'페이지가 늘어나더라도 같은 브랜드의 화면이라는 인상을 유지해야 합니다.',decision:'공통 그리드와 미니멀한 색상 체계를 일관되게 사용합니다.',evidence:'Style Guide와 Sub Page의 반복 그리드'}
    ],
    imageCaption:'업로드된 BY HEYDAY 상세페이지 와이어프레임 — 최종 웹 구현 화면이 아닌 구성 초안',
    visual:'넓은 여백과 정제된 타이포그래피', palette:['#111111','#FFFFFF','#EFF2F6'], type:'Pretendard / Sans-serif', next:'haevichi',
    deliverable:['콘텐츠 정보 구조','브랜드 시각적 위계','메인·서브 페이지 와이어프레임'],
    improvement:'실제 메인 페이지 완성 시안, 사용자 시나리오 및 전후 비교 자료를 추가하면 설계 역량을 더 구체적으로 증명할 수 있습니다.'
  },
  haevichi: {
    title:'HAEVICHI', code:'02', discipline:'HOTEL & RESORT · WEB DESIGN',
    headline:'머무르고 싶은 풍경을,\n예약으로 이어지는 여정으로.',
    summary:'제주의 휴식 경험을 전달하는 큰 비주얼과 객실·다이닝·시설 탐색을 결합한 리조트 웹사이트. 브랜드 감성과 정보 전달 사이의 균형에 초점을 맞췄습니다.',
    role:'웹 디자인 · UI 구성', period:'확인 후 입력', share:'확인 후 입력', tools:'Figma · 웹 디자인 (확인 필요)', image:'assets/haevichi-home.png', state:'메인 페이지 시안',
    focus:'브랜드 몰입과 예약 접근성', focusDetail:'풍경을 먼저 보여주되, 객실 정보와 예약 기능으로 이어지는 경로를 유지합니다.',
    keywords:['IMMERSIVE','EDITORIAL','BOOKING'],
    challenges:[
      {question:'큰 이미지 속에서 CTA가 묻히지 않으려면?',context:'시안의 첫 화면은 수영장 비주얼이 주도하고 예약 기능이 함께 제공됩니다.',decision:'투명한 내비게이션과 명확한 예약 버튼으로 비주얼과 기능을 분리합니다.',evidence:'메인 히어로 상단 내비게이션과 예약하기 버튼'},
      {question:'다양한 리조트 서비스를 어떻게 탐색하게 할까?',context:'Offers, Rooms, Dining, Facility, Concierge가 길게 이어지는 페이지입니다.',decision:'서비스의 성격에 따라 카드·가로형 객실 비주얼·이미지 그리드·정보 카드를 구분합니다.',evidence:'Offers 카드 / Rooms 대형 이미지 / Facility 그리드'},
      {question:'프리미엄한 분위기를 어떻게 유지할까?',context:'객실 사진과 식음료 사진이 서로 다른 화면 밀도를 갖습니다.',decision:'여백, 절제된 블루 포인트, 에디토리얼 제목을 공통 언어로 사용합니다.',evidence:'OFFERS / ROOMS / DINING 타이포그래피'}
    ],
    imageCaption:'업로드된 HAEVICHI 메인 페이지 시안 — 예약 기능의 동작 검증 자료는 별도 필요',
    visual:'파노라마형 이미지와 차분한 블루 포인트', palette:['#143C54','#C9E1F3','#FFFFFF'],type:'Editorial Serif + Sans', next:'apple',
    deliverable:['예약 CTA가 포함된 메인 히어로','서비스별 콘텐츠 모듈','호텔 브랜드 비주얼 일관성'],
    improvement:'실제 예약 플로우와 모바일 화면, 클릭 프로토타입을 더하면 UI 디자인 이상의 UX 설계 능력을 보여줄 수 있습니다.'
  },
  apple: {
    title:'Apple TV', code:'03', discipline:'OTT · CONTENT DISCOVERY / UI UX',
    headline:'수많은 콘텐츠 사이에서,\n다음 이야기를 발견하는 경험.',
    summary:'시네마틱 히어로와 콘텐츠 큐레이션, 구독 안내, 스포츠 진입을 한 화면 체계로 설계한 OTT 웹 UI. 제공된 비회원 메인 시안을 기준으로 설명합니다.',
    role:'UI/UX 디자인', period:'확인 후 입력', share:'확인 후 입력', tools:'Figma · UI 프로토타이핑 (확인 필요)', image:'assets/apple-tv-home.png', state:'비회원 메인 페이지 시안',
    focus:'콘텐츠 발견과 이용 상태별 경험', focusDetail:'아직 시청 기록이 없는 방문자도 콘텐츠를 발견하고 다음 행동을 결정할 수 있도록 유도합니다.',
    keywords:['CINEMATIC','DISCOVERY','ACCESS'],
    challenges:[
      {question:'처음 방문한 사람에게 무엇을 먼저 보여줄까?',context:'비회원은 이어보기 기록이 없으므로 기존 회원과 같은 탐색 구조가 자연스럽지 않습니다.',decision:'히어로와 취향별 콘텐츠 탐색을 앞에 두고, 시청을 시작할 수 있는 이유를 설명합니다.',evidence:'히어로, 오늘 어떤 이야기가 끌리나요?, 콘텐츠 추천 영역'},
      {question:'콘텐츠의 선택 부담을 어떻게 줄일까?',context:'장르와 작품이 많을수록 사용자는 무엇을 볼지 결정하기 어렵습니다.',decision:'오늘의 취향, 테마별 추천, 대표 작품 강조처럼 선택의 단서를 나눕니다.',evidence:'장르 선택 칩 · 시리즈 큐레이션 · F1 더 무비 피처'},
      {question:'비회원의 구독과 스포츠 탐색은?',context:'작품 탐색 외에 구독 가치와 스포츠 콘텐츠에 대한 관심이 공존합니다.',decision:'구독 안내·스포츠 안내·기기별 시청 안내를 독립적인 섹션으로 구성합니다.',evidence:'생중계 안내 / 구독 안내 / 시청 기기 카드'}
    ],
    imageCaption:'업로드된 Apple TV 비회원 메인 시안 — 로그인·스포츠 토글은 실제 구현 화면 확인 필요',
    visual:'몰입형 다크 캔버스와 콘텐츠 우선 구조',palette:['#080809','#202024','#F6F6F7'], type:'System Sans / SF-style',next:'heyday',
    deliverable:['비회원 콘텐츠 탐색 구조','큐레이션 및 구독 진입 모듈','스포츠 탐색을 고려한 정보 구조'],
    improvement:'로그인/구독 상태별 화면, 스포츠 토글 작동 프로토타입, 사용자 테스트 결과를 추가하면 경험 설계의 완성도를 높일 수 있습니다.'
  }
};
const keys=Object.keys(projects);const candidate=new URLSearchParams(location.search).get('id');const key=keys.includes(candidate)?candidate:'heyday';const p=projects[key];
document.body.classList.add('case-'+key,'case-redesign');document.title=p.title+' | BOMI\'S TOWN';
const safe=(s)=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const pic=(cls='',mode='top')=>`<img class="${cls}" src="${p.image}" loading="lazy" alt="${safe(p.title)} 제공된 ${safe(p.state)}" style="object-position:center ${mode}">`;
const clip=(s,n=90)=>String(s).length>n?String(s).slice(0,n-1)+'…':String(s);
const decisionCards=p.challenges.map((c,i)=>`<div class="wf-problem"><div class="wf-problem-num">PROBLEM 0${i+1}</div><h3>${safe(clip(c.question,44))}</h3><p>${safe(clip(c.context,85))}</p><div class="wf-arrow">↓</div><div class="wf-solution"><small>SOLUTION</small><strong>${safe(clip(c.decision,90))}</strong></div></div>`).join('');
const kws=p.keywords.map((k,i)=>`<article><strong>${safe(k)}</strong><span>${safe(clip([p.challenges[0].decision,p.challenges[1].decision,p.challenges[2].decision][i],60))}</span></article>`).join('');
const palette=p.palette.map(c=>`<div class="wf-color"><div style="background:${c}"></div><small>${c}</small></div>`).join('');
const exampleImg=(kind)=>`<img src="${p.image}" alt="${safe(p.title)} ${kind} 원본 시안" loading="lazy">`;
document.querySelector('#root').innerHTML=`
<div class="wf-hero"><div class="wf-wrap wf-hero-grid"><div><span class="wf-eyebrow">SELECTED WORK ${p.code} · ${p.discipline}</span><h1>${p.title}</h1><p class="wf-short">${safe(clip(p.headline.replaceAll('\n',' '),85))}</p></div><div class="wf-meta"><div>WORK PERIOD <strong>${safe(p.period)}</strong></div><div>CONTRIBUTION <strong>${safe(p.share)}</strong></div><div>ROLE <strong>${safe(p.role)}</strong></div><div>TOOLS <strong>${safe(p.tools)}</strong></div><a href="#wf-main">DESIGN OUTPUT ↘</a></div></div></div>
<section class="wf-overview" id="overview"><div class="wf-wrap wf-overview-grid"><div><span class="wf-label">01 / Overview</span><h2>${safe(p.focus)}</h2><p>${safe(clip(p.focusDetail,135))}</p><div class="wf-chipline">${p.deliverable.map(x=>`<span>${safe(x)}</span>`).join('')}</div></div><div class="wf-overview-image"><div class="wf-image-scroller">${exampleImg('개요')}</div><span>${safe(p.state)} · 사용자 제공 자료</span></div></div></section>
<section class="wf-keywords"><div class="wf-wrap"><span class="wf-label">02 / Keyword</span><div class="wf-keyword-grid">${kws}</div></div></section>
<section class="wf-problems"><div class="wf-wrap"><span class="wf-label">03 / Problem & Solution</span><div class="wf-problem-grid">${decisionCards}</div></div></section>
<section class="wf-style"><div class="wf-wrap"><span class="wf-label">04 / Style Guide</span><div class="wf-style-grid"><div><h2>${safe(p.type)}</h2><div class="wf-type-sample">Aa <small>가나다 ABCD 1234</small></div></div><div class="wf-palette">${palette}</div></div></div></section>
<section class="wf-main" id="wf-main"><div class="wf-wrap wf-main-grid"><div class="wf-main-copy"><span class="wf-label">05 / Main</span><span class="wf-overline">${safe(p.discipline)}</span><h2>${safe(p.focus)}</h2><p>${safe(clip(p.summary,122))}</p><a href="${p.image}" target="_blank" rel="noopener">원본 시안 크게 보기 ↗</a></div><div class="wf-main-screen"><div class="wf-browserbar">● ● ● <span>${safe(p.title)} — MAIN</span></div><div class="wf-screen-scroll">${exampleImg('메인')}</div></div></div></section>
<section class="wf-sub"><div class="wf-wrap"><span class="wf-label">06 / Sub Page</span><h2>Different Content,<br>One Experience.</h2><p class="wf-sub-lead">세부 화면이 제공되지 않아, 현재 확보된 시안의 주요 구성 요소를 확대해 보여줍니다.</p><div class="wf-sub-grid"><div class="wf-crop c1">${exampleImg('콘텐츠 상단')}<span>01 / CONTENT STRUCTURE</span></div><div class="wf-crop c2">${exampleImg('중앙 콘텐츠')}<span>02 / VISUAL HIERARCHY</span></div><div class="wf-crop c3">${exampleImg('하단 콘텐츠')}<span>03 / BRAND EXPERIENCE</span></div></div></div></section>
<section class="wf-responsive"><div class="wf-wrap wf-responsive-grid"><div><span class="wf-label">07 / Responsive Screens</span><h2>Across screens.</h2><p>현재 업로드된 자료는 데스크톱 시안입니다. 실제 모바일·태블릿 화면은 확인 후 추가합니다.</p></div><div class="wf-device desktop">${exampleImg('데스크톱 시안')}</div><div class="wf-device phone"><div>RESPONSIVE<br>DESIGN<br><small>시안 추가 예정</small></div></div></div></section>
<section class="wf-bottom"><div class="wf-wrap"><small>DESIGN NOTES</small><p>프로젝트 설명은 제공된 시안을 기준으로 작성했습니다. 사용자 검증 및 성과 수치를 임의로 만들지 않았습니다.</p><a href="project.html?id=${p.next}">다음 프로젝트 보러가기 &nbsp; →</a></div></section>`;
document.getElementById('navWorks')?.addEventListener('click',e=>{e.preventDefault();location.href='index.html?view=works'});

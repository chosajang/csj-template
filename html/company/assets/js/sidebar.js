const asideHTML = `
<!--// Profile Info -->
<div class="hidden md:flex flex-row items-center py-2 bg-gray-900">
  <div class="flex-none w-14 h-14 ml-2"><img src="" onerror="this.src='${siteRoot}assets/images/user.png'" alt="profile" /></div>
  <div class="flex-col space-y-1 pl-2 w-full h-14 justify-content items-center">
    <div class="mt-2 whitespace-nowrap text-sm">사용자 이름</div>
    <div class="text-xs whitespace-nowrap">기업 관리자/담당자</div>
  </div>
</div>
<!--// Left Menu : ST -->
<ul class="select-none" id="menu-ext">
  <li class="pt-4 py-2 pl-4"><p class="text-xs font-bold text-gray-300">기본 메뉴</p></li>
  <a href="${siteRoot}"><li class="py-3 pl-4 cursor-pointer hover:bg-gray-600 border-l-4 border-transparent hover:border-blue-500"><i class="fas fa-columns mr-4"></i>대시보드</li></a>

  <li class="pt-4 py-2 pl-4"><p class="text-xs font-bold text-gray-300">채용 관리</p></li>
  <a href="${siteRoot}"><li class="py-3 pl-4 cursor-pointer hover:bg-gray-600 border-l-4 border-transparent hover:border-blue-500"><i class="fas fa-handshake mr-4"></i>채용 관리</li></a>
  <a href="${siteRoot}"><li class="py-3 pl-4 cursor-pointer hover:bg-gray-600 border-l-4 border-transparent hover:border-blue-500"><i class="fas fa-file-alt mr-4"></i>면접지 관리</li></a>

  <li class="pt-4 py-2 pl-4"><p class="text-xs font-bold text-gray-300">기타 관리</p></li>
  <li class="py-3 pl-4 cursor-pointer hover:bg-gray-600 border-l-4 border-transparent hover:border-blue-500 inline-flex items-center justify-between w-full" for="other-group">
    <span class="inline-flex items-center"><i class="fas fa-layer-group mr-4"></i>기업 관리</span>
    <span class="pr-4"><i class="fas fa-angle-right transition-transform transform"></i></span>
  </li>
  <li id="other-group" class="hidden">
    <ul class="bg-gray-800">
      <li class="py-3 pl-6 cursor-pointer hover:bg-blue-500" onclick="location.href='${siteRoot}company/info.html'">
        <a href="#"><i class="far fa-building mr-4"></i>기업 정보</a>
      </li>
      <li class="py-3 pl-6 cursor-pointer hover:bg-blue-500" onclick="location.href='${siteRoot}company/group.html'">
        <a href="#"><i class="far fa-layer-group mr-4"></i>기업 그룹 관리</a>
      </li>
      <li class="py-3 pl-6 cursor-pointer hover:bg-blue-500" onclick="location.href='${siteRoot}company/account/index.html'">
        <a href="#"><i class="far fa-users-cog mr-4"></i>관리자 계정 관리</a>
      </li>
    </ul>
  </li>
<!--// Left Menu : ED -->`;

/**
 * DOM 트리 완성 후 실행
 */
document.addEventListener("DOMContentLoaded", function(){
  // 사이드바 객체 
  let asideObj = document.getElementById('aside-menu');
  // 사이드바 class 삽입
  asideObj.classList.add('shadow-md','bg-gray-700','text-gray-200','text-sm','items-center','hidden','md:block','left-0','fixed','top-16','bottom-0','overflow-y-auto','flex-row','flex-no-wrap','overflow-hidden','w-52','z-10');
  // 사이드바 HTML 삽입
  asideObj.innerHTML = asideHTML;
  
  // 메뉴 펼침/닫힘 이벤트
  const liList = document.getElementById('menu-ext').querySelectorAll("li");
  liList.forEach( liObj => {
    liObj.addEventListener('click', () => {
      const extMenuObj = document.getElementById(liObj.getAttribute('for'));
      if(extMenuObj != null ){
        extMenuObj.classList.toggle('hidden');
        const iObj = liObj.children[1].querySelector("i")
        iObj.classList.toggle('rotate-90');
      }
    });
  });
  
  // 모바일 메뉴 이벤트
  const btnMobileMenuObj = document.getElementById('mobile-menu-btn');
  
  btnMobileMenuObj.addEventListener('click',() => {
    asideObj.classList.toggle('hidden');
  });

  // 주소기반 메뉴 포커스
  const currentUrl = window.location.href;
  console.log(currentUrl);
});
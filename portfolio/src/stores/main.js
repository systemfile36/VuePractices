//Setup Stores 방식으로 선언한 Pinia Store

import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import data from '../assets/portfolio'

export const useMainStore = defineStore('main', () => {
    const portfolio  = ref(data);
    
    function onToggleDarkMode() {
        let isDark = false;
        //현재가 다크모드이면 다크 모드 해제
        if(isDarkMode()) {
            sessionStorage.removeItem('darkMode');
            isDark = false;
        } else {
            sessionStorage.setItem('darkMode', 'true');
            isDark = true;
        }

        setDarkMode(isDark);
        
    }

    //현재 다크 모드인지 여부를 세션스토리지에서 조회해 반환
    function isDarkMode() {
        const currentMode = sessionStorage.getItem('darkMode');
        return currentMode !== null
    }

    //다크 모드를 설정/해제
    function setDarkMode(isDark) {
        var mode = isDark ? 'dark' : 'light';
        var html = document.querySelector('html');
        html.setAttribute('data-bs-theme', mode);
    }

    return { portfolio, onToggleDarkMode, setDarkMode, isDarkMode }
})
const devHosts = [
    'localhost',
    'dev.api.scriptExam',
  ];
  
  const DEV_HOST_API = 'http://www.script-exam.com/v1/';
  
  const PRD_HOST_API = 'http://www.script-exam.com/v1/';
  
  const DEV_HOST_APP = '//localhost/';
  
  const PRD_HOST_APP = '//localhost/script-exam/';
  
  const BASE_URL_API = devHosts.includes(window.location.host) ? DEV_HOST_API : PRD_HOST_API;
  
  const BASE_URL_APP = devHosts.includes(window.location.host) ? DEV_HOST_APP : PRD_HOST_APP;
  
  export default { BASE_URL_API, BASE_URL_APP };
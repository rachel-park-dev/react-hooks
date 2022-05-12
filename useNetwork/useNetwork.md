## window.online event

- 브라우저가 네트워크에 액세스하고 Navigator.onLine의 값이 true로 전환되면 Window 인터페이스의 온라인 이벤트가 발생합니다.

[example]

```
// addEventListener version
window.addEventListener('online', (event) => {
    console.log("You are now connected to the network.");
});

// ononline version
window.ononline = (event) => {
  console.log("You are now connected to the network.");
};
```

## window.offline event

- 브라우저가 네트워크에 대한 액세스 권한을 상실하고 Navigator.onLine의 값이 false로 전환되면 Window 인터페이스의 오프라인 이벤트가 발생합니다.

[example]

```
// addEventListener version
window.addEventListener('offline', (event) => {
    console.log("The network connection has been lost.");
});

// onoffline version
window.onoffline = (event) => {
  console.log("The network connection has been lost.");
};
```

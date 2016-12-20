將程式碼存為瀏覽器我的最愛，填寫問卷時，直接點選我的最愛，即可自動填寫問所有答案。

```javascript
javascript:(function() {function Jingxun(){var quest = new Array("Q1", "Q2","Q3","Q4","Q5","Q6","Q7","Q8","Q9","QA","QB","QC","QD","QE","QF","QG","QH","QI","QJ","QK","QL","QM","QN","QO","QP","QQ","QR","QS");quest.forEach(function(entry) {var rnd = Math.floor((Math.random() * 2));document.getElementsByName(entry)[rnd].checked = true;});}Jingxun();})()
```

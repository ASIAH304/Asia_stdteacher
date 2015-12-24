var quest = new Array("Q1", "Q2","Q3","Q4","Q5","Q6","Q7","Q8","Q9","QA","QB","QC","QD","QE","QF","QG","QH","QI","QJ","QK","QL","QM","QO");
quest.forEach(function(entry) {
	var rnd = Math.floor((Math.random() * 2));
	document.getElementsByName(entry)[rnd].checked = true;
});

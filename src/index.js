// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	if (currency<=0) return {};	
   if(currency>10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
   var result={};
   var coins={
   	H:50,
   	Q:25,
   	D:10,
   	N:5,
   	P:1
   };
   for (var key in coins){
   	if (currency/coins[key]^0!==0){
   		result[key]=currency/coins[key]^0;
   		currency=currency%coins[key];
   	}
   }
   return result;
}

module.exports = {
    IsOwner:function(request,response){
        if (request.user) {  //로그인 확인.
            return true;
        } else {
            return false;
        }
    }
}
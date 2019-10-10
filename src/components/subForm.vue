<template>
    <div class="form_content">
        <div class="form_img"><img src="../../static/image/form_tx.png" alt=""></div>
        <h1>免费预约试听课</h1>
        <div class="form_text">
            <div class="form_item">
                <label for="">孩子姓名：<input type="text" id="name"></label>
                <label for="">孩子年龄：
                    <select name="age" id="age">
                        <option value="0">请选择孩子年龄</option>
                    </select>
                </label>
                <label for="">家长手机：<input type="text" id="tel"></label>
                <label for="">
                    附近校区：
                    <select name="region" id="region" class="first"></select>
                    <select name="city" id="city" class="second"></select>
                    <select name="area" id="area" class="third"></select>
                </label>
                <input type="button" value="立即预约" id="subBtn">
            </div>
        </div>
    </div>
</template>

<style scoped>
   .form_content {position: relative; width: 330px; border-radius: 20px; background-color: #ffffff; box-shadow: 0 0 25px #888888;}
   .form_img {position: absolute; width: 127px; top: -55px; left: -40px;}
   .form_img img {width: 100%;}
   .form_content h1 {font-size: 25px; color: #ff4e00; font-weight: bold; text-align: center; padding: 10px; padding-left: 20%}
   .form_text {background-color: #fc922a; width: 100%; border-bottom: 10px solid #f97604; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px}
   .form_item {padding: 30px 0 20px; text-align: center;}
   .form_item label {font-size: 16px; display: block;}
   .form_item label:nth-child(2),.form_item label:nth-child(4) .first,.form_item label:nth-child(4) .third{margin: 20px auto}
   .form_item label:nth-child(4){text-align: right; margin-right: 9%}
   .form_item select {background: url(../../static/image/select.png) no-repeat 94%; background-size: 8%; font-size: 16px}
   .form_item input, .form_item select {width: 190px; height: 32px; background-color: #ffffff; border-radius: 20px; padding: 0 15px; }
   .form_item #subBtn {color: #ff7a40; font-size: 18px}
</style>

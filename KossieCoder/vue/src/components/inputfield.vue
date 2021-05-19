<template>
    
    <div>

        <label for="">Name</label><br>                        
      <input type="text" 
             :value="value"
             style="padding:30px; border:2px solid green;"
             @input="$emit('input', $event.target.value)"                 
        ><br>
        <!-- @input 이벤트는 사용자가 input 태그에 타이핑 해서 value가 바뀌었을 때 발생-->
    </div>
</template>

<script>
    export default{
        props:{
            //name:{
            value:{
                type:String,
                required:true
            }
        },
        methods:{ 
            updateName(e){
                console.log(e.target.value);
                //이제 위의 value를 부모컴포넌트로 올려야 한다
                // this.$emit('이벤트 이름',올리고 싶은 값)
                this.$emit('update-name',e.target.value);

                //그러니까 이 함수는 사용자가 타이핑할 때마다 그 값을 부모컴포넌트에 올리는 역할을 한다

            }
        }
    }
</script>

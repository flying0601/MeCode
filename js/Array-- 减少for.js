//1.����forѭ��,    forEach���������ʱ�����޷� break ���� return false �жϵ�
var arr = [1,2,3]		
arr.foo = 'foo'
for(let i of arr){   //for...in   obj.hasOwnProperty �ų�ԭ�ͷ��� i, arr[i]
	if(i==2) break;
}

//ע��
1.for...in������������������--����+ԭ��, �������ڴ��������

2.for...of �������顢α���飬�������Ҫ����������

3.forEach((item, i)=>{}), ��ʹ������ֵʹ�ã��������жϱ���



//���ݴ���: ҵ���д������ݽṹ--���顢����JS����
//1.ɸѡ����
  arr.filter( k => k)

//2.����ֵɸѡ����������ƴ���������&
	ary = Object.keys(params).filter( k => params[k]).sort().map(k => k + '=' + params[k])		//["a=A", "b=B", "d=D"]
	ary.join('&')
	arr.map( k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]) )


//3.���������е�һ����������������
	arr.find( item => item.id == 1 ).title
	arr.findIndex( item => item == 'a')


//4.�޸Ķ�������������Ԫ��
  ary = arr.map( item => item.id == id ? {...item, title:'new title'} : item )		//�������Ը���ԭ��ͬ������


//5.ͳ�����ݡ�����
	var arr= [{name:'yu', nums: 1}, {name:'cd', nums: 8}]
	arr.reduce((total, curr)=> total + curr.nums, 0)


//6.�������������Ԫ��, ��̬Ԫ��
	{...obj, sex:'male', ...o, [var1]: 'variable'}
	[...arr, 1, 2, ...ary]


//7.�Ƴ�����ĳһֵ
	ary = arr.splice(index, 1)
	ary = arr.filter( item => item.id != id )


//8.���������ĳһ����
	user = {name:'yu', age:3, sex: 'male'}
	Object.keys(user)
		.filter( k => k !=='sex')
		.map( k => ({[k]: user[k]}) )
		.reduce((previous, current) => ({...previous, ...cuurent}), {})
	
	//�����⹹
	function fn({name, age}){
		return {name, age}
	}
	fn(user)

//9.����������飬���ȡ�Ԫ�ش�С�Զ���
	Array.from({length: 10}, ()=> Math.floor(Math.random() * limit))

//10.�������ƽ�� -- �ݹ�
  flatten = arr => {
		return arr.reduce( (flat, curr)=> flat.concat(Array.isArray(curr)? flatten(curr) : curr ), [])
	}

//11.��ά����תΪ���� entries
	arr.reduce((flat, curr)=> ({...flat, [curr[0]]:curr[1]}), {})

	arr.reduce((flat, curr)=> {		//��д: (flat[curr[0]]=curr[1], flat)  
		flat[curr[0]]=curr[1]
		return flat
	}, {})


//12.����
	arr.filter( item => {
		if(arys.includes(item)){		//arys.indexOf(item) > -1
			
		}
	})

const useToken =()=>{

   const token =localStorage.getItem('access-token')

   return [token]
}
   

export default useToken;
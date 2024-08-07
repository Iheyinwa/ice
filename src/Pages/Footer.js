export default function Footer(){
  const date = new Date().getFullYear();
  return(
    <footer>
      <div className="mx-4 md:mx-12 py-12 text-center font-bold text-white">
        <p className="text-lg">Copyright &copy; {date} <span className="text-[#dc3435]">ice</span>. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
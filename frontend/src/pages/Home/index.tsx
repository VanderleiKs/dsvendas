import { Link } from "react-router-dom";

const Home = () => {

    return(
        <div className="container">
        <div className="jumbotron">
            <h1 className="display-4">DSVendas</h1>
            <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
            <hr/>
            <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
            <Link to="/dashboard" className="btn btn-lg btn-primary mt-lg-5">Acessar DashBoard</Link>
        </div>
    </div>
    )
}
export default Home;
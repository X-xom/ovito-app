import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { useEffect, useState } from "react"
import { cardArray } from "../constans"

export const Layout = () => {
    const [searchText, setSerchText] = useState('')
    const [products, setProducts] = useState([])

    const handleSearch = (event) => {
        setSerchText(event.target.value)
    }
    const handleSearchArray = () => {
        setProducts(cardArray.filter((p) => p.title.includes(searchText) || p.price.includes(searchText)))
    }


    useEffect(() => {
        setProducts(cardArray)
    }, [])

    return (
        <>
            <Header></Header>

            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input
                                type="text"
                                value={searchText}
                                onChange={handleSearch}
                            />
                            <button className="btn btn-primary search-btn" onClick={handleSearchArray}>
                                <img
                                    className="search-btn__icon"
                                    src="/img/search.svg"
                                    alt="search"
                                />
                                <span className="search-btn__text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>
                <Outlet context={{ products }}></Outlet>
            </main>
        </>
    )
}

    <div className={styles.container}>

        <Head>
            <title>Coinmarketcap clone</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Coinmarketcap clone</h1>

        <table className="table">
            <thead>
                <tr>
                    <th>Symbol</th>
                    <th>24H Change</th>
                    <th>Price</th>
                    <th>Market cap</th>
                </tr>
            </thead>
            <tbody>
                {data.map(coin => (
                <tr key={coin.id}>
                    <td>
                        <img src={coin.image} style={{width: 25, height: 25, marginRight: 10}} />
                        {coin.symbol.toUpperCase()}
                    </td>
                    <td>
                        <span className={coin.price_change_percentage_24h> 0 ? (
                            'text-success'
                            ) : 'text-danger'}
                            >
                            {formatPercent(coin.price_change_percentage_24h)}
                        </span>
                    </td>
                    <td>{formatDollar(coin.current_price, 20)}</td>
                    <td>{formatDollar(coin.market_cap, 12)}</td>
                </tr>
                ))}
            </tbody>
        </table>

    </div>

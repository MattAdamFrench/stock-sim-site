import { NextResponse } from "next/server";
import twelvedata from "twelvedata";


let testData = {
    "meta": {
        "symbol": "GOOG",
        "interval": "1day",
        "currency": "USD",
        "exchange_timezone": "America/New_York",
        "exchange": "NASDAQ",
        "mic_code": "XNGS",
        "type": "Common Stock"
    },
    "values": [
        {
            "datetime": "2023-05-08",
            "open": "105.86000",
            "high": "108.20000",
            "low": "105.79000",
            "close": "108.11000",
            "volume": "9112240"
        },
        {
            "datetime": "2023-05-05",
            "open": "105.32000",
            "high": "106.44000",
            "low": "104.73900",
            "close": "106.21500",
            "volume": "20705300"
        },
        {
            "datetime": "2023-05-04",
            "open": "106.16000",
            "high": "106.30000",
            "low": "104.70000",
            "close": "105.21000",
            "volume": "19780600"
        },
        {
            "datetime": "2023-05-03",
            "open": "106.22000",
            "high": "108.13000",
            "low": "105.62000",
            "close": "106.12000",
            "volume": "17116300"
        },
        {
            "datetime": "2023-05-02",
            "open": "107.66000",
            "high": "107.73000",
            "low": "104.50000",
            "close": "105.98000",
            "volume": "20343100"
        },
        {
            "datetime": "2023-05-01",
            "open": "107.72000",
            "high": "108.68000",
            "low": "107.50000",
            "close": "107.71000",
            "volume": "20926300"
        },
        {
            "datetime": "2023-04-28",
            "open": "107.80000",
            "high": "108.29000",
            "low": "106.04000",
            "close": "108.22000",
            "volume": "23957900"
        },
        {
            "datetime": "2023-04-27",
            "open": "105.23000",
            "high": "109.15000",
            "low": "104.42000",
            "close": "108.37000",
            "volume": "38235200"
        },
        {
            "datetime": "2023-04-26",
            "open": "105.56000",
            "high": "107.02000",
            "low": "103.27000",
            "close": "104.45000",
            "volume": "37068200"
        },
        {
            "datetime": "2023-04-25",
            "open": "106.61000",
            "high": "107.44000",
            "low": "104.56000",
            "close": "104.61000",
            "volume": "31408100"
        },
        {
            "datetime": "2023-04-24",
            "open": "106.05000",
            "high": "107.32000",
            "low": "105.36000",
            "close": "106.78000",
            "volume": "21410900"
        },
        {
            "datetime": "2023-04-21",
            "open": "106.09000",
            "high": "106.64000",
            "low": "105.48500",
            "close": "105.91000",
            "volume": "22369800"
        },
        {
            "datetime": "2023-04-20",
            "open": "104.65000",
            "high": "106.88800",
            "low": "104.64000",
            "close": "105.90000",
            "volume": "22515300"
        },
        {
            "datetime": "2023-04-19",
            "open": "104.21500",
            "high": "105.72500",
            "low": "103.80000",
            "close": "105.02000",
            "volume": "16732000"
        },
        {
            "datetime": "2023-04-18",
            "open": "107.00000",
            "high": "107.05000",
            "low": "104.78000",
            "close": "105.12000",
            "volume": "17641400"
        },
        {
            "datetime": "2023-04-17",
            "open": "105.43000",
            "high": "106.71000",
            "low": "105.32000",
            "close": "106.42000",
            "volume": "29043400"
        },
        {
            "datetime": "2023-04-14",
            "open": "107.69000",
            "high": "109.58000",
            "low": "107.59000",
            "close": "109.46000",
            "volume": "20745400"
        },
        {
            "datetime": "2023-04-13",
            "open": "106.47000",
            "high": "108.26500",
            "low": "106.44000",
            "close": "108.19000",
            "volume": "21650700"
        },
        {
            "datetime": "2023-04-12",
            "open": "107.39000",
            "high": "107.58700",
            "low": "104.97000",
            "close": "105.22000",
            "volume": "22761600"
        },
        {
            "datetime": "2023-04-11",
            "open": "106.92000",
            "high": "107.22000",
            "low": "105.28000",
            "close": "106.12000",
            "volume": "18721300"
        },
        {
            "datetime": "2023-04-10",
            "open": "107.39000",
            "high": "107.97000",
            "low": "105.60000",
            "close": "106.95000",
            "volume": "19741500"
        },
        {
            "datetime": "2023-04-06",
            "open": "105.77000",
            "high": "109.63000",
            "low": "104.81500",
            "close": "108.90000",
            "volume": "34684200"
        },
        {
            "datetime": "2023-04-05",
            "open": "106.12000",
            "high": "106.54000",
            "low": "104.10200",
            "close": "104.95000",
            "volume": "21864200"
        },
        {
            "datetime": "2023-04-04",
            "open": "104.84000",
            "high": "106.10000",
            "low": "104.60000",
            "close": "105.12000",
            "volume": "20377200"
        },
        {
            "datetime": "2023-04-03",
            "open": "102.67000",
            "high": "104.95000",
            "low": "102.38000",
            "close": "104.91000",
            "volume": "20719900"
        },
        {
            "datetime": "2023-03-31",
            "open": "101.71000",
            "high": "104.19000",
            "low": "101.44000",
            "close": "104.00000",
            "volume": "28086500"
        },
        {
            "datetime": "2023-03-30",
            "open": "101.44000",
            "high": "101.61000",
            "low": "100.29000",
            "close": "101.32000",
            "volume": "25009800"
        },
        {
            "datetime": "2023-03-29",
            "open": "102.72000",
            "high": "102.82000",
            "low": "101.03000",
            "close": "101.90000",
            "volume": "26148300"
        },
        {
            "datetime": "2023-03-28",
            "open": "103.00000",
            "high": "103.00000",
            "low": "100.28000",
            "close": "101.36000",
            "volume": "24913500"
        },
        {
            "datetime": "2023-03-27",
            "open": "105.32000",
            "high": "105.40000",
            "low": "102.63000",
            "close": "103.06000",
            "volume": "25393400"
        },
        {
            "datetime": "2023-03-24",
            "open": "105.74000",
            "high": "106.16000",
            "low": "104.74000",
            "close": "106.06000",
            "volume": "25245000"
        },
        {
            "datetime": "2023-03-23",
            "open": "105.89000",
            "high": "107.10100",
            "low": "105.41000",
            "close": "106.26000",
            "volume": "31385800"
        },
        {
            "datetime": "2023-03-22",
            "open": "105.14000",
            "high": "107.51000",
            "low": "104.21000",
            "close": "104.22000",
            "volume": "32336900"
        },
        {
            "datetime": "2023-03-21",
            "open": "101.98000",
            "high": "105.96000",
            "low": "101.86000",
            "close": "105.84000",
            "volume": "33122800"
        },
        {
            "datetime": "2023-03-20",
            "open": "101.06000",
            "high": "102.58000",
            "low": "100.79000",
            "close": "101.93000",
            "volume": "26033900"
        },
        {
            "datetime": "2023-03-17",
            "open": "100.84000",
            "high": "103.49000",
            "low": "100.75000",
            "close": "102.46000",
            "volume": "76109100"
        },
        {
            "datetime": "2023-03-16",
            "open": "96.57000",
            "high": "101.97000",
            "low": "95.87000",
            "close": "101.07000",
            "volume": "54499500"
        },
        {
            "datetime": "2023-03-15",
            "open": "93.54000",
            "high": "97.25000",
            "low": "93.04000",
            "close": "96.55000",
            "volume": "38367300"
        },
        {
            "datetime": "2023-03-14",
            "open": "93.07000",
            "high": "94.83000",
            "low": "92.78000",
            "close": "94.25000",
            "volume": "32303900"
        },
        {
            "datetime": "2023-03-13",
            "open": "90.56500",
            "high": "93.08000",
            "low": "89.94000",
            "close": "91.66000",
            "volume": "31508600"
        },
        {
            "datetime": "2023-03-10",
            "open": "92.50000",
            "high": "93.18000",
            "low": "90.80000",
            "close": "91.01000",
            "volume": "32831700"
        },
        {
            "datetime": "2023-03-09",
            "open": "94.49000",
            "high": "95.92000",
            "low": "92.35500",
            "close": "92.66000",
            "volume": "24438900"
        },
        {
            "datetime": "2023-03-08",
            "open": "94.40500",
            "high": "96.24000",
            "low": "94.40500",
            "close": "94.65000",
            "volume": "25395200"
        },
        {
            "datetime": "2023-03-07",
            "open": "95.42000",
            "high": "96.09000",
            "low": "93.84400",
            "close": "94.17000",
            "volume": "24101500"
        },
        {
            "datetime": "2023-03-06",
            "open": "94.36000",
            "high": "96.30000",
            "low": "94.30000",
            "close": "95.58000",
            "volume": "28288200"
        },
        {
            "datetime": "2023-03-03",
            "open": "92.74000",
            "high": "94.11000",
            "low": "92.66000",
            "close": "94.02000",
            "volume": "30151584"
        },
        {
            "datetime": "2023-03-02",
            "open": "89.86000",
            "high": "92.48000",
            "low": "89.77000",
            "close": "92.31000",
            "volume": "22530400"
        },
        {
            "datetime": "2023-03-01",
            "open": "90.16000",
            "high": "91.20000",
            "low": "89.85000",
            "close": "90.51000",
            "volume": "25477776"
        },
        {
            "datetime": "2023-02-28",
            "open": "89.54000",
            "high": "91.45000",
            "low": "89.52000",
            "close": "90.30000",
            "volume": "30546912"
        },
        {
            "datetime": "2023-02-27",
            "open": "90.09000",
            "high": "90.44990",
            "low": "89.61000",
            "close": "90.10000",
            "volume": "22724262"
        },
        {
            "datetime": "2023-02-24",
            "open": "89.63000",
            "high": "90.13000",
            "low": "88.86000",
            "close": "89.35000",
            "volume": "31295620"
        },
        {
            "datetime": "2023-02-23",
            "open": "92.13000",
            "high": "92.13000",
            "low": "90.01000",
            "close": "91.07000",
            "volume": "32423720"
        },
        {
            "datetime": "2023-02-22",
            "open": "91.93400",
            "high": "92.36000",
            "low": "90.87000",
            "close": "91.80000",
            "volume": "29891136"
        },
        {
            "datetime": "2023-02-21",
            "open": "93.24000",
            "high": "93.41490",
            "low": "92.00000",
            "close": "92.05000",
            "volume": "28367198"
        },
        {
            "datetime": "2023-02-17",
            "open": "95.07000",
            "high": "95.75000",
            "low": "93.45000",
            "close": "94.59000",
            "volume": "31095068"
        },
        {
            "datetime": "2023-02-16",
            "open": "95.54000",
            "high": "97.88000",
            "low": "94.97000",
            "close": "95.78000",
            "volume": "35465980"
        },
        {
            "datetime": "2023-02-15",
            "open": "94.74000",
            "high": "97.34000",
            "low": "94.36000",
            "close": "97.10000",
            "volume": "36887804"
        },
        {
            "datetime": "2023-02-14",
            "open": "94.66000",
            "high": "95.17500",
            "low": "92.65000",
            "close": "94.95000",
            "volume": "42513080"
        },
        {
            "datetime": "2023-02-13",
            "open": "95.01000",
            "high": "95.35000",
            "low": "94.05000",
            "close": "95.00000",
            "volume": "42965936"
        },
        {
            "datetime": "2023-02-10",
            "open": "95.74000",
            "high": "97.02000",
            "low": "94.53000",
            "close": "94.86000",
            "volume": "49325276"
        },
        {
            "datetime": "2023-02-09",
            "open": "100.54000",
            "high": "100.61000",
            "low": "93.86000",
            "close": "95.46000",
            "volume": "97477648"
        },
        {
            "datetime": "2023-02-08",
            "open": "102.69000",
            "high": "103.58000",
            "low": "98.45500",
            "close": "100.00000",
            "volume": "73242496"
        },
        {
            "datetime": "2023-02-07",
            "open": "103.63000",
            "high": "108.67000",
            "low": "103.54750",
            "close": "108.04000",
            "volume": "33641448"
        },
        {
            "datetime": "2023-02-06",
            "open": "102.68500",
            "high": "104.70000",
            "low": "102.21000",
            "close": "103.47000",
            "volume": "25494884"
        },
        {
            "datetime": "2023-02-03",
            "open": "103.51000",
            "high": "108.02000",
            "low": "103.30000",
            "close": "105.22000",
            "volume": "36733304"
        },
        {
            "datetime": "2023-02-02",
            "open": "106.79000",
            "high": "108.82000",
            "low": "106.54000",
            "close": "108.80000",
            "volume": "44886972"
        },
        {
            "datetime": "2023-02-01",
            "open": "99.74000",
            "high": "102.18990",
            "low": "98.42000",
            "close": "101.43000",
            "volume": "25914184"
        },
        {
            "datetime": "2023-01-31",
            "open": "97.86000",
            "high": "99.91000",
            "low": "97.79000",
            "close": "99.87000",
            "volume": "22306778"
        },
        {
            "datetime": "2023-01-30",
            "open": "98.74500",
            "high": "99.40880",
            "low": "97.52000",
            "close": "97.95000",
            "volume": "23826034"
        },
        {
            "datetime": "2023-01-27",
            "open": "99.05000",
            "high": "101.58000",
            "low": "98.97000",
            "close": "100.71000",
            "volume": "29020354"
        },
        {
            "datetime": "2023-01-26",
            "open": "98.28000",
            "high": "99.21000",
            "low": "96.82000",
            "close": "99.16000",
            "volume": "24542060"
        },
        {
            "datetime": "2023-01-25",
            "open": "97.20000",
            "high": "97.72000",
            "low": "95.26000",
            "close": "96.73000",
            "volume": "31000850"
        },
        {
            "datetime": "2023-01-24",
            "open": "99.55000",
            "high": "101.09000",
            "low": "98.70000",
            "close": "99.21000",
            "volume": "27391372"
        },
        {
            "datetime": "2023-01-23",
            "open": "99.13000",
            "high": "101.40000",
            "low": "98.75000",
            "close": "101.21000",
            "volume": "31791782"
        },
        {
            "datetime": "2023-01-20",
            "open": "95.95000",
            "high": "99.42000",
            "low": "95.91000",
            "close": "99.28000",
            "volume": "53704764"
        },
        {
            "datetime": "2023-01-19",
            "open": "91.39000",
            "high": "94.40000",
            "low": "91.38000",
            "close": "93.91000",
            "volume": "28707652"
        },
        {
            "datetime": "2023-01-18",
            "open": "92.94000",
            "high": "93.59000",
            "low": "91.40000",
            "close": "91.78000",
            "volume": "19641622"
        },
        {
            "datetime": "2023-01-17",
            "open": "92.78000",
            "high": "92.97000",
            "low": "90.84000",
            "close": "92.16000",
            "volume": "22935824"
        },
        {
            "datetime": "2023-01-13",
            "open": "91.53000",
            "high": "92.98000",
            "low": "90.93000",
            "close": "92.80000",
            "volume": "18630708"
        },
        {
            "datetime": "2023-01-12",
            "open": "92.40000",
            "high": "92.62000",
            "low": "90.57000",
            "close": "91.91000",
            "volume": "22754216"
        },
        {
            "datetime": "2023-01-11",
            "open": "90.06000",
            "high": "92.45000",
            "low": "89.74000",
            "close": "92.26000",
            "volume": "25998844"
        },
        {
            "datetime": "2023-01-10",
            "open": "86.72000",
            "high": "89.47000",
            "low": "86.70000",
            "close": "89.24000",
            "volume": "22855590"
        },
        {
            "datetime": "2023-01-09",
            "open": "89.19000",
            "high": "90.83000",
            "low": "88.58000",
            "close": "88.80000",
            "volume": "22996680"
        },
        {
            "datetime": "2023-01-06",
            "open": "87.36000",
            "high": "88.47000",
            "low": "85.57000",
            "close": "88.16000",
            "volume": "26612628"
        },
        {
            "datetime": "2023-01-05",
            "open": "88.07000",
            "high": "88.21000",
            "low": "86.56000",
            "close": "86.77000",
            "volume": "23136084"
        },
        {
            "datetime": "2023-01-04",
            "open": "91.01000",
            "high": "91.24000",
            "low": "87.80000",
            "close": "88.71000",
            "volume": "27046484"
        },
        {
            "datetime": "2023-01-03",
            "open": "89.83000",
            "high": "91.55000",
            "low": "89.02000",
            "close": "89.70000",
            "volume": "20738456"
        },
        {
            "datetime": "2022-12-30",
            "open": "87.36000",
            "high": "88.83000",
            "low": "87.03000",
            "close": "88.73000",
            "volume": "19190296"
        },
        {
            "datetime": "2022-12-29",
            "open": "87.03000",
            "high": "89.36000",
            "low": "86.99000",
            "close": "88.95000",
            "volume": "18280660"
        },
        {
            "datetime": "2022-12-28",
            "open": "87.50000",
            "high": "88.52000",
            "low": "86.37000",
            "close": "86.46000",
            "volume": "17879568"
        },
        {
            "datetime": "2022-12-27",
            "open": "89.31000",
            "high": "89.50000",
            "low": "87.53000",
            "close": "87.93000",
            "volume": "15470870"
        },
        {
            "datetime": "2022-12-23",
            "open": "87.62000",
            "high": "90.10000",
            "low": "87.62000",
            "close": "89.81000",
            "volume": "17815010"
        },
        {
            "datetime": "2022-12-22",
            "open": "88.93000",
            "high": "89.18000",
            "low": "86.94000",
            "close": "88.26000",
            "volume": "23656066"
        },
        {
            "datetime": "2022-12-21",
            "open": "89.73000",
            "high": "90.92000",
            "low": "88.91000",
            "close": "90.25000",
            "volume": "20336388"
        },
        {
            "datetime": "2022-12-20",
            "open": "88.73000",
            "high": "89.78000",
            "low": "88.04000",
            "close": "89.63000",
            "volume": "21976846"
        },
        {
            "datetime": "2022-12-19",
            "open": "90.88000",
            "high": "91.20000",
            "low": "88.92000",
            "close": "89.15000",
            "volume": "23020536"
        },
        {
            "datetime": "2022-12-16",
            "open": "91.20000",
            "high": "91.75000",
            "low": "90.01000",
            "close": "90.86000",
            "volume": "48485508"
        },
        {
            "datetime": "2022-12-15",
            "open": "93.54000",
            "high": "94.03000",
            "low": "90.43000",
            "close": "91.20000",
            "volume": "28298756"
        },
        {
            "datetime": "2022-12-14",
            "open": "95.54000",
            "high": "97.22000",
            "low": "93.94000",
            "close": "95.31000",
            "volume": "26452940"
        },
        {
            "datetime": "2022-12-13",
            "open": "98.07000",
            "high": "99.80000",
            "low": "95.38000",
            "close": "95.85000",
            "volume": "34788520"
        }
    ],
    "status": "ok"
}

export async function GET(req: Request, { params }: { params: { ticker: string } }) {

    const client = twelvedata({
        key: process.env.TWELVEDATA_API_KEY,
    });

    // const data = await client.timeSeries({
    //     symbol: params.ticker,
    //     interval: "1day",
    //     outputsize: 100,
    // });

    return NextResponse.json(
        testData,
        {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "s-maxage=1, stale-while-revalidate"
            }
        }
    );
}
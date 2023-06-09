import "./global.css"

export const metadata = {
    title: 'Stock Simulator',
    description: 'A stock simulator written by Matt French',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

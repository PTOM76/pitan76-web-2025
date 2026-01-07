import styles from '@/styles/page.module.css'

export default function EmptyPage() {
  return (
    <>
        <div className={styles.container}>
            <h1 className={styles.title}>$empty</h1>
            
            <span className={styles.breadcrumb}>
                <a href="/">Top</a> / Empty
            </span>
            
            <div style={{height: "36vh"}}></div>
        </div>
        <div style={{height: "36vh"}}></div>
    </>
  )
}

export async function getStaticProps() {
    return {
        props: {
            title: 'Empty',
            description: 'This is an empty page.',
        }
    };
}

import styles from  "./TransactionHistory.module.css"

const TransactionHistory = ({items}) =>{
    return <table className={styles.table}>
    <thead className={styles.thead}>
      <tr className={styles.trur}>
        <th className={styles.fon}>Type</th>
        <th className={styles.fon}>Amount</th>
        <th className={styles.fon}>Currency</th>
      </tr>
    </thead>
  
    <tbody>
        {items.map(({type,amount,currency,id})=>(
            <tr key={id}>
        <td className={styles.ku}>{type}</td>
        <td className={styles.ku}>{amount}</td>
        <td className={styles.ku}>{currency}</td>
      </tr>
        ))}

    </tbody>
  </table>
  
}
export default TransactionHistory;
export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Default'}</strong>
            <p>{props.repository?.description ?? 'Forms in React'}</p>

            <a href={props.repository?.link ?? 'https://github.com/LeandroJoseRo'}>Acessar Repositório</a>
        </li>
    );
}
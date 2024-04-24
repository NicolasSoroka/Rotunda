import hash from 'object-hash'
import { useState } from 'react'

const DEFAULT_URL_FORMAT = '/:version/api/:collection/:id'
const DEFAULT_URL_INSTANCE = '/6/api/listings/3?sort=desc&limit=10'

const UrlparserPage = () => {
  const [urlFormat, setUrlFormat] = useState(DEFAULT_URL_FORMAT)
  const [urlInstance, setUrlInstance] = useState(DEFAULT_URL_INSTANCE)
  const [parsedUrl, setParsedUrl] = useState(null)

  const parseUrl = (
    urlFormat = DEFAULT_URL_FORMAT,
    urlInstance = DEFAULT_URL_INSTANCE
  ) => {
    const urlFormatParts = urlFormat.split('/')
    const variableNames = urlFormatParts
      .filter(part => part.startsWith(':'))
      .map(part => part.slice(1))
    const notVariablesNames = urlFormatParts.filter(
      part => !part.startsWith(':')
    )

    const urlInstanceParts = urlInstance
      .split('/')
      .filter(part => !notVariablesNames.includes(part))
    const values = {}
    let queryParamIndex = urlInstance.indexOf('?')
    if (queryParamIndex === -1) queryParamIndex = urlInstance.length

    for (let i = 0; i < variableNames.length; i++) {
      const variableName = variableNames[i]
      if (i === variableNames.length - 1) {
        values[variableName] = urlInstanceParts[i].split('?')[0]
        continue
      }
      values[variableName] = urlInstanceParts[i]
    }

    const queryParams = urlInstance.slice(queryParamIndex + 1).split('&')
    queryParams.forEach(param => {
      const [key, value] = param.split('=')
      values[key] = decodeURIComponent(value)
    })

    return values
  }

  const handleParse = () => {
    setParsedUrl(parseUrl(urlFormat, urlInstance))
  }

  return (
    <div className='flex flex-col md:flex-row gap-6 h-full w-full justify-center items-center'>
      <div className='flex flex-col gap-y-2 w-full md:max-w-[400px] px-6 items-center'>
        <input
          className='p-2 w-full md:w-[400px]'
          type='text'
          placeholder='URL format'
          value={urlFormat}
          onChange={e => setUrlFormat(e.target.value)}
        />
        <input
          className='p-2 w-full md:w-[400px]'
          type='text'
          value={urlInstance}
          placeholder='URL instance'
          onChange={e => setUrlInstance(e.target.value)}
        />
        <button
          className='py-2 px-4 mt-4 rounded-sm bg-white shadow-md shadow-[#308cdb] hover:scale-105 transition-all active:scale-95 active:shadow-sm'
          onClick={handleParse}
        >
          Execute
        </button>
      </div>

      {parsedUrl && (
        <code className='px-4'>
          <p>{`{`}</p>
          <ul className='pl-4'>
            {Object.entries(parsedUrl).map(([key, value]) => (
              <li key={key}>
                {key} : {value}
              </li>
            ))}
          </ul>
          <p>{`}`}</p>
          <h1 className='pt-4'>Hashed value: {hash(parsedUrl)}</h1>
        </code>
      )}
    </div>
  )
}

export default UrlparserPage

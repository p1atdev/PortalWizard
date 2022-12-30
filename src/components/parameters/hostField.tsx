import { ComponentProps, ComponentPropsWithRef, useState } from "react"
import { ConnectionState, SecurityState } from "../../types/mod"
import { Icon } from "@iconify/react"
import { useAUTO1111 } from "../../hooks/auto1111"

interface Props {
  initialHost: string
  onChange: (host: string) => void
}

const HostField = ({ initialHost, onChange }: Props) => {
  const [connection, setConnection] = useState<ConnectionState>("disconnected")
  const [security, setSecurity] = useState<SecurityState>("unknown")
  const [host, setHost] = useState(initialHost)

  const { connectionCheck } = useAUTO1111({ host })

  const connectionState = () => {
    switch (connection) {
      case "disconnected":
        return (
          <Icon
            className="h-5 w-5 text-red-500"
            icon="tabler:plug-connected-x"
          />
        )
      case "connecting":
        return <Icon className="h-5 w-5 animate-spin" icon="mdi:loading" />
      case "connected": {
        switch (security) {
          case "secure": {
            return (
              <Icon
                className="h-5 w-5 text-green-500"
                icon="mdi:shield-check"
              />
            )
          }
          case "insecure": {
            return (
              <Icon
                className="h-5 w-5 text-orange-500"
                icon="material-symbols:check-circle-rounded"
              />
            )
          }
          default: {
            return (
              <Icon
                className="h-5 w-5"
                icon="material-symbols:question-mark-rounded"
              />
            )
          }
        }
      }
      case "error":
        return <Icon className="h-5 w-5" icon="akar-icons:cross" />
    }
  }

  return (
    <div className="sticky bottom-0 z-10 mt-auto grid h-[64px] w-full place-items-center border-t-[1px] border-gray-300  bg-white">
      <div className="my-auto flex w-full items-center px-2 ">
        <div className="">{connectionState()}</div>
        <input
          className="w-full  px-2 text-lg"
          placeholder="http://localhost:8760"
          value={host}
          onChange={(e) => {
            setHost(e.target.value)
            onChange(e.target.value)
          }}
        />
        <button
          onClick={async () => {
            setConnection("connecting")
            const result = await connectionCheck()
            setConnection(result.connection)
            setSecurity(result.security)
          }}
        >
          GO
        </button>
      </div>
    </div>
  )
}

export default HostField

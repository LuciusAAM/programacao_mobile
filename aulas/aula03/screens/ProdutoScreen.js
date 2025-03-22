import { View, Text, StyleSheet, Image } from "react-native";

function ProdutoScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Detalhes do Produto</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.photo}
          source={{ uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEA8PDxAQDxUQEA8PEBAPDxAQEBAQFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGi0dHR0tKy0tLS0rLS0tLSstLS0tLS0tKy0tLS0tLS0rLSsrLS0tLS0tNy03Ny03LTctNy0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBQYEB//EAD0QAAIBAwIEAwMJBwQDAQAAAAABAgMEEQUhBhIxUUFhcRMikQcWMlJTcoGhsRQVMzRCYtEkQ3PBksLwJf/EABsBAAIDAQEBAAAAAAAAAAAAAAABAgMEBQYH/8QAIxEAAgIBAwUBAQEAAAAAAAAAAAECAxEEEiEFExQVMVFBMv/aAAwDAQACEQMRAD8A24CZEbIZKxQEyJkiIdkBoIAHgIhyQiSQgDby5p0Y81WcYLzf5GduON7WLaipzfhhYTHknGts0uBDGy44n/TQj5Zm/wDByy4xuW/owXoskO7Et8aRvk8dBct+ZhqfGNXG8E/gWthxpSxirCUX3ispi7sQ8WRplkSRwUtftZRUlVSz4PZr1O6E1JKUXlNZTXRoammRdEkIArQhLJW44AAYgEWKAgZAQoogAAMAEAi0KAAAgAAACIBBRkmAAACAWIg+CGMbOSSbk8JdW/AzOrcZwipU6EeZ9OeXh6FBxfxV7Sc6FBuMYtxck/pNdTMUqvTJCXCNVME2W11dVK29STl6vZeg+hpbe+DihMt7fUWljBksmzq1UxX8Ejp+OqB2qXgTPUX2/MarnPgY5SZr2RwRewQnsUTyZy1JPwyR3seyI50oktnrFW3lmnJ48YN5g16FbN1Oz+BzVXLxT+Bog2ZrYo9Y0TWadzBSjhSS96P/AGjvZ4tZ6hVo1FUpTcWvDwfk0epcL8S0bunyPFOvFZlBv6S7xNkJHMur/patiZHzgMwXIyNYFAQcgIAhQEABRBcjWAmOAQUBAAAMCEAAQwAAQxCop+MdTdC0m4bSn7i8k+rLhGN+U2WKNLzkwGjzlPxJqW72IInbaVXF4SW/chJm6hHXSljGYt47FxR1+3SSlR3XXZHBVu6kNpRi1jrjY4qVGVaeIRSfXskZJLLOkm0bDTNTs6u3LGD7SSLJRtl/Qn+B546DhPD2cX4MsIanUSwpP8iiUS5TZtHVtl/tr4HHf6naQj7tNSfZeBkq97Np5kzgVV5EoIe40NTXl/TSivzK6rcVqjbilh+gzT6cZ1IxnLli+sux26jQnRk4UX7SPVSSzlFyWCmfJWV7Crhyklhbs5rS5dKpCrF4cJKX4eKLB+3msS2XnsU9ysNrtsWxZmsjwe86XeRrUIVY+MULURUcBL/8+i/J/qy3qM0RMFiwMFGikjO2AAACABQAAFQgqAAABRgQAIAhiggFGIRySWW0l3eyMh8pFJTtqdSEoyUamHytPqvIteNKqhZ1N2nLCWDyxVpcvLzPle+MvDYE4RyzmhF5LK0sJS36epHZQi5Jy8DW6RY+22h4bZ7GayR06ayspqqlhuDS77jvZS68uPNLCNPU060o71Je0mlnlW+/ZlVc16tVOMEqcPBIyuTNiRmrr6RGoPsyzlbwg5e2zzeCXivU7NGuqcZvmjzReOqTwPOSSRRTpSa6M45I9Ir6paKD5YRzjo4RMdc16U5PMOXf+kYmivsauJepecksJ4eCirwxLME3+BteGbjmglVgklHZtdRv4CXJR1qbaxuil1OwcUmsvueiuhbt42KrWadGHRrddCuMsMcoJo03BN1Sp6fRVWpCDWU1KST69i5bjL3oNST6Nbo8P1Ws3LZ7Lw3wercFZ/YqWe8jXCWTmaiKSLbADpDDQjnsUVCCoCIoAADAVCCoAAAAAIUhcAgAABAAwIdSs41qNSlJfSjheT8GeM3trKlUnSmsOLaPboGD+U3SZZp3MI5WOWphfmwJwfJi6TLG21KpCPJCXKn1wVUJHRSWXgzzR1KpcFnT1FR3eZPzH/OGfSMUQahpvLFTi8p9ULw7+y+0/wBVnlx4dzM4GlSCpdSqyzLHTGyLjSbaUMyjyvKxiSyaay0vS2uaK+My4ttKsce5y/8AmG0e9nnd3L3nsl6LBwy0yb95OPfqeo1OGrKTz/7jKnDtjFNyfKl1bqYQ8B3Dyt3coPGFleR00NfktpLbGMo2t7oekNSft0ts+7UyYTiC3tYPFtOU+ialjr5BgjvJJ6lFvMZPJw3t45PdnbR0mEaDrVG02vdjgpKj3GoJsUrWhlV5a9Ue28K0lGwod/eZ5Rw5oda5r01GnLkUk5yaaikvM9qqU404Qpw2UIpI0xgkc+2eTlmxEAItRibFBMRgmBEeAnMJkBjgEFAAFEAAIwEABIBRBRjHRYVUpLEkpLs90NQuQGin4p0elOzrONOClCPPDlik8o8hVXB75RaacX0ezPFOM9PVvd1acfot80fx3wQccmqFh26RqEZR9nU/AdcWEObYy0KjW6Zc2erLGJ9SmUDXXPJZW9vyNOOdvDwNDS1ugklOlJNLffxMpS1JOSSNhGyp1ILmit118Sh5NacWcVbXabfuRmvxJLjUoSpOPLNya6voQ1NJjCWVv67kV5tFtJbEcsfBTVLeXYdQs4rEpdVuPd+l9LCKe+vm2+Vk4xbIzaSLPVr/ACuTOTYfJ1w3TlSlcVoKTbXIpLojy11W3uz3vhp/6G3x9QujHDMc55OvEY7RSiu0UkiOcshUZEi7BhnL+AhwiQpIpGtCYH4DAANSFQuAAAQogoAAAAARAAIBC4AB0QJYGik0aTZHVUYJuUlFLq20gyNRZJQhueffKtQjz03yrmae66nbxFxfjNK1ks53qLw8kZhc9Z81WUpvrmTy8ldk9qNdFO5mehp1RrOP8kE6bTw0bilQzskRahoya5+XddjK9UjpeHgx1ObTTRdU+J60UksbLA6VhBrGMEL0jzGrosTpkgq8SV5eKX4HLU1as1hz69iaejPu/gQT0uSJKyJHtSOKVRt7sTqdsdOn2OqhpU+w+7FEOzJlQqbPeuE5RdjQeV9BeJ5JLSJLqsDnXuKUeWNSaj2TeELvIb07PZqtLPTf0IOQ8r0Liivb1VOU5VIv3Zxk85R6xY3VK4pxq0ZL3llrKyn2wWxnkx204ZGLgknTwN5S4yuDGAOAZHaNAUBCEFAEAgAAABFAfGiyrvuIKcMqlHnfd9EUF3qVap9Kbx9VbL4GOeqSO7T0eyf02FSpTisynFJdd0VOra/SpR5oRdXyWyM0kSZ2w1ldmZZa3k6kOixS5K7VeOrtrFNRor+1Zl8WZK71SvUlzVatSfrJ4+Bp9U0lSWaez8Y/4MtcWkotppr1RdTqVIx6nprq/wA/Drs3zfgXdqZajWlB5WxdadrcdlUWP7kXWLcuDLU+2+TSWhcwgnHHcorS8pSa5ZxflnDNBbrZHNlTJM6UbYsz9fT8Sax6ETtDS16Zx1qRU20WLDKR2/kMdrkuvYkkaC7Ed7HhFLTszro0cFhKj5Ecqb7DUmw4RzXMcrcqq8OqaLWvUjH6UlH1eCj1bVaK92nLmfddDRXGTZRZZHBSXccSaI7XVK1KSlSqSg/JvHwI69dtkEYttJbnQjHCOZZy+DXadx/eQa9ry1Y+Kaw/ibHReObet7s4Spvxysx+J51pmhznhyXKvHJo7fS6dNe6v8ldmpUDVp+mys5fw9DV3QfSrDf+5EqjFrMWn6PJ597NEtC5q03mnNry8DP5prfRVjg3UqYxoz1rxNNbVY584+Jb2Ws0anjyvtLYvr1kX9Obf0iyB0gTcqe6wxjiaY2xZzbNPOH8GAO5QLN8f0p2S/DAqA5IcIeabPpSEAUCBIQiubSFRYmvxJgQ1Jp8EZRTWGZm/wCH5Len7y7eKKipYTjnMWvVM3wkqaezSZrhqpIwW9PrnyeerK6Nr0LTTeILii9puS+rJ5NBcaDTn091lJfcN1obpcy7rc1wvjP6cy3Qzr+F9ZcbQbxWp4/ui+n4F1Q1S0qrMa0Y+UmkzzGdvJdU0RNFuyEmZJSsgeuRs5dVyyT6NNbkNzd0Kf8AFqRjjwzl/A8whfVUklUmkuiUnsQ1JuTy22/Nj7Ff4Reomb+54yt4ZVOHO/ByeF8DM6nxVXqPZ8i7Q2/Mo+U7LTSqlTeMG/PGwu1XEalbPhEFS6nLeUm/VjIpvpuaS14Vl/XJLyTLy10qjTWyy+7ISvhD4aatDZP/AEZWy0SpPdrlXdl7YaLTp7tZfmWzx4DGY7NXJ/DrU6GuHLQqeOgjYCGWUmzckl8AQUCGRhgAAaYHTb39WH0Zv0e53w4iqrqkynAsVskUz09c/qND85f7AM6BLvy/SrwKPwUB3KHKZ8s15G4DA/lDlGGRmAwO5Q5QDIgC4EwMBYsnhXa8/UgiOGm0Rkk/ol1a0au1SCXmtmUGo8MPrSkpLs9maAcpFsb5RM9mnhP+GIp6JVlLl5Wn59PiWlvwlLZzmvNLqaTmDnZN6ubM60Fa/hzWmi0Kf9Cl97f9TtlNYwkkl4JYRHzDWyuV8maYURh8QspDGxRCrc2XpCALgRoWQAQMjmgGMAXAYDAxAFwGAwAgCy2WWMpVVLPK846ktosoeAuAEMcAs4NJs5vaNklErydIYOaUsMloPPV4JbQySpC8pDOTT2fP6ImoSk+scCcSO4HETlJhjQh5I+UOUeIIeRqQYHAIMiALgBBkaAuAwA8jQHYDAgyJghu5uMco6EhZU000/EaQsnNRp5hzZ8DmVz7yTeCyhabYTePM5rzSofTqVYwXrv8AA01QyZ7bWjluLrDxFp+h02dOo95rkXeWxW0WlUxQzUa6N+PmM1qdyse1Tgn0w9jUqV+GJ6qS/paXd9Rhs5qXoVdfWcvFOOP1KtU095SyLUuUtoQb80SWnRXLWs6qlzUl1bx6ndoK3n+BwafRnUeN4+po7GwVNPu+rIXQSi8F+mnKbyyTAEmBTAdHcROG3UgnSxvk6PZ56sT9mRPIZOaEcs6Y+zXVifsyFVtEeSLJadeHREkmc37NHzJ0D5FhDWIOaDBAY3AYHYFwLAZGYDA9oMAGRmAwPwGBYDJG4iYJcCYDAZI8CEjiJyiwSTEiJXqqEXKTwkOSGXFNNJyXNyvOH02JRXJFnPTr3Fb3aFN/efT8zku9IlF/6usqfksTfwR2Vb26rSjChB00lu0+Vfiwlo9GmnVu6/tH1cU+v+To0pHH1Dk2zj0C4pRuYwpRlU5srncWseeC/wCLrNOnGOHOT+jy9MvuU9pxBQjVjToW6ipSUefZS3NVde5DMVmTWyffubMow7ZM80vNNlR3qvDz9DBDRuW3ywj18i5160m251d23nqcGnUGpxaXVkXJDjVJvBc6HZTT9pNYWNkW1SRI37q9DnbObqLMne09e2IAJkDJk0YHxFGxY4mIBRBR4EAqAAwAMQUB4AEAIBYEAAAYAABDsD2gJgFEdgEGBZE5ROUeA9oZGcoqQ4B4DJNSnhPG2epndS0ac55UsrPj2LscmWxscSmVakUdC2t6MklH3srd74ZpXWbxnc45wi92k/wHqRLvsh48SPUrWFTlz4EFC1jDojplIikyDtkyyNUUOnLJC4hUrKKzJ4RVXeuwjlR3wV9uUmWSthBfS05WBlvnHLsBLx5FPm1ljHiSj/8AMd85aJhGxD0S6ZWeZ9xcbxcS0e45cTUe5gQbH62v8F7i4364lodx0OJKGd3jz6nn2Rci9dWNdWuPRfnBbfaL4Mb84bf6553zl9onC11dQdSkkop4zLoyqWigia6raab5xUPrIX5wUPrIx+t6FcWrSrLr0a6FXzFfiVkva2noq1+h9ZD1xBb/AFkZuz4OuZ01Vwlnom92R3XCd1CLlyN47bkXpaw9raamOv2/1kS/vy1+svieaVISjLlkmn2ZoqXBt46PtuTw5lHxwQ8asftbTU/vy2+sviO/fFt9dHmNRSi3GWU08NPqiWzpzqTjTgm5SeEhrSwH7S09JWsW32qQ/wDe9r9sjAavotzbqLrw5VLo85JrDhq8rQVSnTbjLo+/mLxYD9pabn97Wv20RHq9t9rEx/zOvvs2VuqaXXt2lWi456EfHrD2lpv3rFt9rET970PtYfExdHhy7klKMMprK3JXwvefZv4h4sA9tYbH960PtI/EZLVqK/3I/E88uKdSnJxmpRa6pkEqj7slHRRl8H7eaPRnrFH7SP4FJq/EPWMOnfJkud938Rkpsvh0+KZTb1mbWDtuNTqSe8mQSuJPxOcU1LSRRgnrZv8Ao/2jAjwBLxo/hV5Uv0eAAdBGYAYAMBAYAQZNDWe0/Jj/ACFP1f6igZrvhOBUfK1/Cpfff6HmFP6UfVfqIBjLD3bTP4VP7kf0OifUUCIzyHjD+fl9+P6ns9h/Bh9yP6IAKhM8T42/na3qJwV/PUPvP9AAtj8Jo2XysfwqP3jVcKfydt/xRAAYy4PNPlU/i2/rH/sAM4P4arRf4VP7q/QtQAmVo8p+UP8Aml/xr9WZJgBop+kJ/AYxigbYmZgAATEAAACP/9k=" }}
        />
        <Text style={styles.productName}>Nome do Produto</Text>
        <Text style={styles.productDetail}>Caracteristicas do Produto</Text>
        <View style={styles.sectionQtPrc}>
          <View style={styles.sectionButtons}>
            <View style={styles.buttonQt}>
              <Text style={styles.textQt}>-</Text>
            </View>

            <View style={{ marginRight: 16 }}>
              <Text style={styles.textQt}>1</Text>
            </View>

            <View style={styles.buttonQt}>
              <Text style={styles.textQt}>+</Text>
            </View>
          </View>

          <Text style={styles.price}>R$ 99,99</Text>
        </View>

        <View style={styles.buttonAdd}>
          <Text style={styles.textAdd}>Adicionar ao Carrinho</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 64,
    backgroundColor: "blue",
    padding: 16,
    justifyContent: "center",
    elevation: 3,
    marginBottom: 8,
  },
  appTitle: {
    fontSize: 24,
    color: "white",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  photo: {
    borderRadius: 8,
    height: 350,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 8,
  },
  productDetail: {
    fontSize: 12,
    color: "gray",
    marginBottom: 64,
  },
  sectionQtPrc: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonQt: {
    height: 40,
    width: 40,
    borderRadius: 8,
    backgroundColor: "lightblue",
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  textQt: {
    fontSize: 24,
    fontWeight: "600",
  },
  price: {
    fontSize: 24,
    color: "green",
  },
  buttonAdd: {
    marginTop: 32,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 24,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  textAdd: {
    fontSize: 16,
    fontWeight: "600",
    color: "blue"
  }
});

export default ProdutoScreen;

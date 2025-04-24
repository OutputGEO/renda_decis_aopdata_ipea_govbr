# renda_decis_aopdata_ipea_govbr
Distribuição de Renda em São Paulo

Um mapa coroplético que apresenta a distribuição de renda em São Paulo. Os dados são importados do projeto Acesso a Oportunidades do IPEA e apresentados no padrão H3 da Uber.

O mapa abaixo mostra o rendimento domiciliar em grupos de decis em São Paulo. Divide-se toda a população, do mais pobre ao mais rico, em dez grupos de igual tamanho; assim, os hexágonos em azul estão no top 10% da distribuição de renda (10% mais ricos); já os hexágonos em vermelho estão no bottom 10% da distribuição (10% mais pobres).

O grid hexagonal segue o padrão H3, em resolução 9. Os dados de renda provém do Censo Demográfico do IBGE a nível setor censitário. Usa-se uma técnica de interpolação espacial para converter os dados para o padrão hexagonal.

Apesar dos dados brutos do Censo estarem defasados, é improvável que a sua distribuição espacial tenha se alterado significativamente na última década. Grosso modo, as maiores rendas se concentram no Centro Expandido e no Quadrante Sudoeste da cidade. As duas exceções são a região de Santana-Tucuruvi e o eixo Tatuapé - Jardim Anália Franco.

Dados: IPEA (Acesso a Oportunidades) acessado via aopdata

Tipografia: Lato

Paleta: Spectral (ColorBrewer)

código R: https://github.com/OutputGEO/renda_decis_aopdata_ipea_govbr/blob/main/codigo-r

cRÉDITOS: Vinicius Oike
![unnamed-chunk-3-1](https://github.com/user-attachments/assets/c698fe2d-8f00-4afc-a8a9-d41383f8ec68)

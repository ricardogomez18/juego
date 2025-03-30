"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HistoryPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-2xl shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-serif font-bold text-gray-800 text-center">
            La historia de Opsidian
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg leading-relaxed text-gray-700 font-serif">
          <p>
            Hace 1232 años, una lluvia de meteoritos cayo en la tiera.
            Aproximadamente 1288 mil meteoritos cayeron al agua, y se formo una
            isla. 28 años mas tarde se formo un poco de tierra firme en las
            piedras y empezo a aparecer vida en forma de plantas, arboles y
            animales. Sesenta y dos años mas tarde, se descubrio la isla.
            Españoles y Daneses habitaron la isla. Al llegar, se dieron cuenta
            que la isla estaba llena de recursos, y decidieron quedarse a vivir.
            Con el tiempo, la isla fue creciendo y se formaron diferentes
            pueblos, y le pusieron de nombre Opsidian. Algunos se casaron y
            crearon una familia, asi nacieron los Opsidianos. Cuando se acabaron
            los daneses y españoles solo quedaron los Opsidianos. Construyeron
            casas y edificios y algunos años mas tarde hubo una votacion y
            eligieron un presidente llamado Lucas y descubrieron la opsidiana y
            el pais fue conocido por tener tanta.
          </p>
          <p>
            Opsidian se encuentra en el océano Atlántico. Ubicado al norte entre
            America y Europa. Tiene una de las minas mas grandes del mundo.
          </p>
          <p>
            En el año 2025, Opsidian es un país independiente, con una gran
            diversidad cultural y una economía en crecimiento. La gente de
            Opsidian es conocida por su amabilidad y hospitalidad, y el país es
            un destino turístico popular. Opsidian es un lugar donde la gente
            puede vivir en paz y armonía, y disfrutar de la belleza de la
            naturaleza.
          </p>

          <p></p>
        </CardContent>
      </Card>
    </div>
  );
}

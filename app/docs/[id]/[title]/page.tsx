interface IdTilePageProps {
  params: {
    id: string;
    title: string;
  };
}

const IdTilePage = ({ params }: IdTilePageProps) => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-4xl">{params.title}</h1>
      <h2 className="text-xl"> Id {params.id}</h2>
    </div>
  );
};

export default IdTilePage;

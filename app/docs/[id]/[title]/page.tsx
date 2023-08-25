interface IdTilePageProps {
  params: {
    id: string;
    title: string;
  };
}

const IdTilePage = ({ params }: IdTilePageProps) => {
  return (
    <div>
      IdTilePage {params.id} {params.title}
    </div>
  );
};

export default IdTilePage;

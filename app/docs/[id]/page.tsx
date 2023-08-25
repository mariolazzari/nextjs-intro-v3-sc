interface DocPangeProps {
  params: {
    id: string;
  };
}

const DocPage = ({ params }: DocPangeProps) => {
  return <div>DocPage: {params.id}</div>;
};

export default DocPage;

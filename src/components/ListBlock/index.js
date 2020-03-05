import React, {Component} from 'react';
import './listblock.scss'

class ListBlock extends Component {
    render() {
        return (
            <div className="listblock container">
                <div className="listblock__left">
                    <p className="title-label">comment ça marche ?</p>
                    <h3 className="title">
                        Tous vos outils de dev réunis sur une seule application
                    </h3>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet asperiores aut
                        cumque cupiditate ducimus harum illo maxime modi, natus nihil non odit praesentium quae saepe sint, ut.
                    </p>
                </div>
                <div className="listblock__right">
                    <div className="list__item">
                        <div className="list__item-number">
                            1
                        </div>
                        <h4 className="list__item-title">Créer vos projets</h4>
                        <div className="list__item-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi dolores ea
                                error eveniet hic id illo, minima nam nemo obcaecati, quod sit sunt tenetur totam voluptas
                                voluptatum. Repellat, totam?
                            </p>
                        </div>
                    </div>
                    <div className="list__item">
                        <div className="list__item-number">
                            2
                        </div>
                        <h4 className="list__item-title">Ajouter vos sprints</h4>
                        <div className="list__item-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi dolores ea
                                error eveniet hic id illo, minima nam nemo obcaecati, quod sit sunt tenetur totam voluptas
                                voluptatum. Repellat, totam?
                            </p>
                        </div>
                    </div>
                    <div className="list__item">
                        <div className="list__item-number">
                            3
                        </div>
                        <h4 className="list__item-title">Affecter vos tâches</h4>
                        <div className="list__item-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi dolores ea
                                error eveniet hic id illo, minima nam nemo obcaecati, quod sit sunt tenetur totam voluptas
                                voluptatum. Repellat, totam?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListBlock;
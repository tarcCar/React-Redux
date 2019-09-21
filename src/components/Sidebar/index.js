import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { Container } from './styles';

import * as CourseActions from '../../store/actions/couse';
const Sidebar = ({ modules, toggoleLesson }) => (
  <aside>
    {modules.map(module => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map(lesson => (
            <li key={lesson.id}>
              {lesson.title}{' '}
              <button onClick={() => toggoleLesson(module, lesson)}>
                Selecionar
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

const mapStateToProps = state => ({
  modules: state.course.modules,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CourseActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
